'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Alert } from '@/components/ui/shared/Alert';
import { Button } from '@/components/ui/shared/Button';
import { classNames } from '../shared/functions';

type SUPPORTED_HTTP_METHODS = 'POST' | 'DELETE';

function SeedDataCardDescription(props: { hasSeed: boolean }): React.ReactNode {
  const { hasSeed } = props;
  if (hasSeed) {
    return <Alert message="Data is ready" type="success" />;
  }

  return <Alert message="Data currently missing" type="default" />;
}

function SeedDataButton(props: {
  isLoading: boolean;
  hasSeed: boolean;
  makeRequest: (method: SUPPORTED_HTTP_METHODS) => void;
}): React.ReactNode {
  const { isLoading, hasSeed, makeRequest } = props;

  if (isLoading) {
    return <Button loading />;
  }

  if (hasSeed) {
    return (
      <Button danger onClick={() => makeRequest('DELETE')}>
        Delete Seed
      </Button>
    );
  }

  return <Button onClick={() => makeRequest('POST')}>Create Seed</Button>;
}

const SEED_ENDPOINT_URL = '/api/products/seed';

export default function HomeClient(): React.ReactNode {
  const [isSeedRequestLoading, setIsSeedRequestLoading] = useState(false);
  const [isSeedDataCreated, setIsSeedDataCreated] = useState(false);
  const didFetchSeed = useRef(false);

  const makeSeedDataRequest = (httpMethod: 'POST' | 'DELETE' | 'GET') => {
    setIsSeedRequestLoading(true);
    fetch(SEED_ENDPOINT_URL, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('request error');
        }
        return response.json();
      })
      .then(({ seed_data_exists }) => {
        setIsSeedDataCreated(seed_data_exists === true);
      })
      .catch((err) => {
        console.log('error: ', err);
      })
      .finally(() => setIsSeedRequestLoading(false));
  };

  useEffect(() => {
    if (didFetchSeed.current) {
      return;
    }
    didFetchSeed.current = true;
    makeSeedDataRequest('GET');
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 self-center">
      <h1 className="text-center text-5xl">Hunt Labs Assessment</h1>
      <div
        className={classNames(
          isSeedDataCreated ? 'border-green-600' : 'border-black',
          'flex flex-col border-[3px] transition-colors',
        )}
      >
        <div
          className={classNames(
            isSeedDataCreated ? 'bg-green-600' : 'bg-black',
            'flex flex-col items-center justify-between gap-2 p-5 text-white transition-colors',
          )}
        >
          <h2 className="text-3xl leading-6">Data init</h2>
          <p className="text-white/70">
            Initialize seed data for the exercise.
          </p>
        </div>
        <div className="p-5">
          {isSeedRequestLoading ? (
            <div className="skeleton" />
          ) : (
            <SeedDataCardDescription hasSeed={isSeedDataCreated} />
          )}
        </div>
      </div>

      <SeedDataButton
        isLoading={isSeedRequestLoading}
        hasSeed={isSeedDataCreated}
        makeRequest={makeSeedDataRequest}
      />
    </div>
  );
}
