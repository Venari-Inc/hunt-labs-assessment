import React, { SVGProps } from 'react';

export const HuntLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={55} height={24} {...props}>
      <path
        fill="#04050F"
        d="M47.62 3.8h-3.68V.6h10.88v3.2h-3.68V23h-3.52V3.8ZM29.612.6h4.416l3.424 13.408h.064V.6h3.136V23h-3.616L32.812 6.648h-.064V23h-3.136V.6Zm-9.355 22.72c-1.707 0-3.008-.48-3.904-1.44-.896-.981-1.344-2.379-1.344-4.192V.6h3.52v17.344c0 .768.15 1.323.448 1.664.32.341.768.512 1.344.512.576 0 1.013-.17 1.312-.512.32-.341.48-.896.48-1.664V.6h3.392v17.088c0 1.813-.448 3.21-1.344 4.192-.896.96-2.197 1.44-3.904 1.44ZM.1.6h3.52v9.12h3.775V.6h3.52V23h-3.52V12.92H3.62V23H.1V.6Z"
      />
    </svg>
  );
};

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} {...props}>
      <path
        fill="#04050F"
        d="M0 1a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm0 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm1-7a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H1Z"
      />
    </svg>
  );
};

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} {...props}>
      <path
        fill="#04050F"
        d="M.303 6.186c0-.866.136-1.657.41-2.373.28-.723.67-1.348 1.172-1.876A5.24 5.24 0 0 1 3.643.718 5.58 5.58 0 0 1 5.84.287c.905 0 1.715.199 2.431.596A4.873 4.873 0 0 1 10 2.465 4.985 4.985 0 0 1 11.729.883c.716-.397 1.526-.596 2.431-.596.794 0 1.527.143 2.197.43a5.114 5.114 0 0 1 1.758 1.22 5.523 5.523 0 0 1 1.162 1.875c.28.717.42 1.508.42 2.374 0 1.386-.368 2.76-1.103 4.12-.73 1.355-1.768 2.676-3.116 3.966-1.34 1.282-2.93 2.51-4.765 3.681a2.078 2.078 0 0 1-.361.176.87.87 0 0 1-.352.088.922.922 0 0 1-.352-.088 2.214 2.214 0 0 1-.351-.176c-1.836-1.172-3.428-2.399-4.776-3.681-1.347-1.29-2.389-2.611-3.125-3.965C.667 8.946.303 7.572.303 6.186Zm1.572 0c0 .904.218 1.822.654 2.753.436.925 1.029 1.833 1.778 2.725a22.396 22.396 0 0 0 2.539 2.559c.95.807 1.937 1.55 2.959 2.226.104.078.169.117.195.117.026 0 .094-.039.205-.117a30.194 30.194 0 0 0 2.95-2.226 21.38 21.38 0 0 0 2.538-2.559c.75-.892 1.342-1.8 1.778-2.725.436-.93.654-1.849.654-2.753 0-.866-.172-1.622-.518-2.266a3.72 3.72 0 0 0-1.406-1.514c-.592-.364-1.266-.547-2.021-.547-.612 0-1.14.111-1.582.332a4.016 4.016 0 0 0-1.133.82 7.95 7.95 0 0 0-.8.968 2.292 2.292 0 0 1-.352.39.492.492 0 0 1-.313.108.569.569 0 0 1-.322-.098 1.97 1.97 0 0 1-.342-.4 6.415 6.415 0 0 0-.781-.977 3.891 3.891 0 0 0-1.143-.81c-.45-.222-.98-.333-1.592-.333-.755 0-1.432.183-2.03.547A3.808 3.808 0 0 0 2.382 3.92c-.339.644-.508 1.4-.508 2.266Z"
      />
    </svg>
  );
};

export const HeartFillIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} {...props}>
      <path
        fill="#04050F"
        d="M9.99 18.393c-.117 0-.26-.04-.43-.118a3.235 3.235 0 0 1-.468-.263c-1.823-1.172-3.408-2.403-4.756-3.692-1.341-1.289-2.38-2.617-3.115-3.984C.49 8.969.127 7.592.127 6.206c0-.9.143-1.72.43-2.462a5.746 5.746 0 0 1 1.2-1.933A5.44 5.44 0 0 1 3.536.56 5.33 5.33 0 0 1 5.723.11c.97 0 1.816.248 2.539.743A5.442 5.442 0 0 1 9.99 2.787 5.542 5.542 0 0 1 11.73.854C12.45.359 13.297.11 14.268.11c.78 0 1.51.15 2.187.45.677.293 1.27.71 1.777 1.25.508.54.905 1.184 1.192 1.933.293.742.44 1.563.44 2.461 0 1.387-.369 2.764-1.104 4.13-.736 1.368-1.774 2.696-3.116 3.985-1.334 1.29-2.913 2.52-4.736 3.692a3.85 3.85 0 0 1-.478.263c-.163.079-.31.118-.44.118Z"
      />
    </svg>
  );
};

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={props.fill || '#04050F'}
        d="M.459 8.113c0-1.074.202-2.08.605-3.017a7.885 7.885 0 0 1 4.16-4.17A7.618 7.618 0 0 1 8.253.32c1.074 0 2.08.202 3.018.606a7.855 7.855 0 0 1 4.17 4.17 7.55 7.55 0 0 1 .605 3.017 7.48 7.48 0 0 1-.43 2.54c-.28.8-.67 1.526-1.172 2.177l4.776 4.805c.104.104.182.224.234.361.059.137.088.283.088.44 0 .214-.049.41-.146.585a.988.988 0 0 1-.391.41c-.17.105-.365.157-.586.157-.156 0-.306-.03-.45-.088a1.15 1.15 0 0 1-.38-.244l-4.805-4.815a8.054 8.054 0 0 1-2.11 1.075c-.767.26-1.575.39-2.421.39a7.62 7.62 0 0 1-3.027-.605 7.887 7.887 0 0 1-2.48-1.68 7.886 7.886 0 0 1-1.68-2.48A7.618 7.618 0 0 1 .46 8.113Zm1.67 0c0 .847.156 1.64.469 2.383a6.224 6.224 0 0 0 1.318 1.944 6.33 6.33 0 0 0 1.953 1.318 5.97 5.97 0 0 0 2.383.478 5.9 5.9 0 0 0 2.373-.478 6.224 6.224 0 0 0 3.271-3.262 5.97 5.97 0 0 0 .479-2.383 5.9 5.9 0 0 0-.479-2.373 6.192 6.192 0 0 0-1.318-1.953 5.982 5.982 0 0 0-1.953-1.318 5.9 5.9 0 0 0-2.373-.479c-.846 0-1.64.16-2.383.479A6.193 6.193 0 0 0 2.598 5.74a6.006 6.006 0 0 0-.47 2.373Z"
      />
    </svg>
  );
};

export const IconCheck = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export const IconClose = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.636 4.222 12 10.585l6.364-6.363a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414L13.414 12l6.364 6.364a1 1 0 0 1-1.414 1.414L12 13.414l-6.364 6.364a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414L10.585 12 4.222 5.636a1 1 0 0 1 1.414-1.414z" />
    </svg>
  );
};