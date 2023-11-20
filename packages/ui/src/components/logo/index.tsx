import React from 'react';
import { LogoStyled } from './styled';
import { useTheme } from '@/ui/theme';

export const Logo: React.FC = React.memo(() => {
  const theme = useTheme();

  let fill: string;
  switch (theme.mode) {
    case 'dark':
      fill = '#FFFFFF';
      break;
    case 'light':
      fill = '#133985';
      break;
  }

  return (
    <LogoStyled width="97" height="29" viewBox="0 0 97 29" fill="none">
      <path d="M0 22.2276V4.71848H7.08345C8.71183 4.71848 10.096 5.18652 11.2358 6.12262C12.3843 7.05058 12.9585 8.15761 12.9585 9.44373C12.9585 10.1926 12.7314 10.9049 12.2771 11.5805C11.8315 12.2479 11.2658 12.7119 10.5802 12.9724C11.5229 13.184 12.29 13.6765 12.8813 14.4498C13.4727 15.2231 13.7684 16.1307 13.7684 17.1726C13.7684 18.5971 13.1899 19.7978 12.0329 20.7746C10.8759 21.7432 9.49174 22.2276 7.8805 22.2276H0ZM4.47376 11.6049H6.87776C7.33199 11.6049 7.71338 11.4665 8.02191 11.1898C8.33045 10.913 8.48471 10.5752 8.48471 10.1763C8.48471 9.79375 8.32616 9.46408 8.00906 9.18732C7.70052 8.91056 7.32342 8.77218 6.87776 8.77218H4.47376V11.6049ZM4.47376 18.1738H7.48198C7.97906 18.1738 8.39901 18.011 8.74183 17.6854C9.09321 17.3598 9.26891 16.9651 9.26891 16.5011C9.26891 16.0371 9.0975 15.6423 8.75468 15.3167C8.42044 14.9911 8.01334 14.8283 7.5334 14.8283H4.47376V18.1738Z" fill={fill} />
      <path d="M16.5231 11.495C17.8086 10.2659 19.407 9.6513 21.3182 9.6513C23.2294 9.6513 24.8321 10.2659 26.1262 11.495C27.4204 12.7241 28.0674 14.2585 28.0674 16.0982C28.0674 17.2947 27.7718 18.3814 27.1804 19.3582C26.589 20.335 25.7791 21.1002 24.7507 21.6537C23.7222 22.1991 22.5781 22.4718 21.3182 22.4718C19.407 22.4718 17.8086 21.8653 16.5231 20.6525C15.2461 19.4396 14.6076 17.9215 14.6076 16.0982C14.6076 14.2504 15.2461 12.716 16.5231 11.495ZM21.3182 13.4974C20.5812 13.4974 19.9684 13.7457 19.4799 14.2422C18.9914 14.7306 18.7471 15.3493 18.7471 16.0982C18.7471 16.8226 18.9914 17.425 19.4799 17.9052C19.9684 18.3855 20.5812 18.6256 21.3182 18.6256C22.0724 18.6256 22.6938 18.3855 23.1823 17.9052C23.6794 17.425 23.9279 16.8226 23.9279 16.0982C23.9279 15.3493 23.6794 14.7306 23.1823 14.2422C22.6938 13.7457 22.0724 13.4974 21.3182 13.4974Z" fill={fill} />
      <path d="M38.0084 13.7538H34.9231V16.904C34.9231 17.4657 35.1202 17.893 35.5144 18.1861C35.9087 18.4791 36.4143 18.6256 37.0314 18.6256C37.4171 18.6256 37.7428 18.5931 38.0084 18.5279V22.2276C37.5199 22.3578 36.8686 22.4229 36.0544 22.4229C34.4517 22.4229 33.1619 21.9386 32.1848 20.9699C31.2078 19.9931 30.7193 18.6622 30.7193 16.9773V13.7538H28.341V9.8955H30.7193V6.74533H34.9231V9.8955H38.0084V13.7538Z" fill={fill} />
      <rect x="42.8807" width="54.1193" height="29" rx="4" fill="#1C64F2" />
      <path d="M56.6391 9.6513C58.2932 9.6513 59.5873 10.1519 60.5215 11.1531C61.4557 12.1543 61.9227 13.5381 61.9227 15.3045V22.2276H57.6932V15.8295C57.6932 15.1295 57.4961 14.5678 57.1019 14.1446C56.7076 13.7131 56.1848 13.4974 55.5335 13.4974C54.8907 13.4974 54.3679 13.7131 53.9651 14.1446C53.5709 14.5678 53.3738 15.1295 53.3738 15.8295V22.2276H49.1571V4.71848H53.3738V11.3241C54.1879 10.2089 55.2764 9.6513 56.6391 9.6513Z" fill="white" />
      <path d="M72.3908 9.8955H76.6203V22.2276H72.3908V20.8234C71.5681 21.9223 70.4882 22.4718 69.1512 22.4718C67.4971 22.4718 66.1987 21.9752 65.256 20.9821C64.3218 19.9809 63.8547 18.5971 63.8547 16.8308V9.8955H68.0713V16.3057C68.0713 17.0058 68.2685 17.5674 68.6627 17.9907C69.0655 18.414 69.5969 18.6256 70.2568 18.6256C70.8996 18.6256 71.4138 18.414 71.7995 17.9907C72.1937 17.5674 72.3908 17.0058 72.3908 16.3057V9.8955Z" fill="white" />
      <path d="M86.5613 9.6513C87.6412 9.6513 88.6311 9.94027 89.531 10.5182C90.4394 11.0961 91.1508 11.8776 91.665 12.8625C92.1878 13.8393 92.4492 14.9097 92.4492 16.0737C92.4492 17.8401 91.875 19.3501 90.7266 20.6036C89.5867 21.849 88.1983 22.4718 86.5613 22.4718C84.9415 22.4718 83.6774 21.8897 82.7689 20.7257V22.2276H78.5523V4.71848H82.7689V11.3973C83.6774 10.2333 84.9415 9.6513 86.5613 9.6513ZM85.5586 18.65C86.3214 18.65 86.9727 18.4018 87.5126 17.9052C88.0526 17.4005 88.3226 16.7901 88.3226 16.0737C88.3226 15.3493 88.0526 14.7388 87.5126 14.2422C86.9813 13.7457 86.3299 13.4974 85.5586 13.4974C84.7787 13.4974 84.1188 13.7457 83.5788 14.2422C83.0389 14.7388 82.7689 15.3493 82.7689 16.0737C82.7689 16.7901 83.0389 17.4005 83.5788 17.9052C84.1188 18.4018 84.7787 18.65 85.5586 18.65Z" fill="white" />
    </LogoStyled>
  );
});
