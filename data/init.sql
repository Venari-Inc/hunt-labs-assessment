CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS product
(
    id            uuid PRIMARY KEY                  DEFAULT uuid_generate_v4(),
    product_title text                     NOT NULL,
    brand_name    text                     NOT NULL,
    product_image text                     NOT NULL,
    product_price float                    NOT NULL,
    created_at    timestamp WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at    timestamp WITH TIME ZONE NOT NULL DEFAULT NOW()
)