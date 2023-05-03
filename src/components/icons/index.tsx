import path from "path";
import React from "react";
export const icons = {
  AddtoCart: () => {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3424 6.45547C16.2381 6.35047 16.1139 6.26721 15.9772 6.21048C15.8405 6.15376 15.6938 6.12471 15.5458 6.125H13.2958V5.5625C13.2958 4.51821 12.8809 3.51669 12.1425 2.77827C11.4041 2.03984 10.4026 1.625 9.35829 1.625C8.314 1.625 7.31248 2.03984 6.57406 2.77827C5.83563 3.51669 5.42079 4.51821 5.42079 5.5625V6.125H3.17079C2.87242 6.125 2.58627 6.24353 2.3753 6.45451C2.16432 6.66548 2.04579 6.95163 2.04579 7.25V14.8438C2.04579 16.2148 3.20595 17.375 4.57704 17.375H14.1395C14.8028 17.3752 15.4397 17.1159 15.9142 16.6525C16.153 16.4247 16.3432 16.1509 16.4732 15.8476C16.6032 15.5442 16.6704 15.2177 16.6708 14.8877V7.25C16.6712 7.10244 16.6425 6.95626 16.5861 6.81989C16.5297 6.68352 16.4469 6.55966 16.3424 6.45547V6.45547ZM11.6083 12.3125H9.92079V14C9.92079 14.1492 9.86153 14.2923 9.75604 14.3977C9.65055 14.5032 9.50748 14.5625 9.35829 14.5625C9.20911 14.5625 9.06603 14.5032 8.96054 14.3977C8.85505 14.2923 8.79579 14.1492 8.79579 14V12.3125H7.10829C6.95911 12.3125 6.81603 12.2532 6.71054 12.1477C6.60505 12.0423 6.54579 11.8992 6.54579 11.75C6.54579 11.6008 6.60505 11.4577 6.71054 11.3523C6.81603 11.2468 6.95911 11.1875 7.10829 11.1875H8.79579V9.5C8.79579 9.35082 8.85505 9.20774 8.96054 9.10225C9.06603 8.99676 9.20911 8.9375 9.35829 8.9375C9.50748 8.9375 9.65055 8.99676 9.75604 9.10225C9.86153 9.20774 9.92079 9.35082 9.92079 9.5V11.1875H11.6083C11.7575 11.1875 11.9006 11.2468 12.006 11.3523C12.1115 11.4577 12.1708 11.6008 12.1708 11.75C12.1708 11.8992 12.1115 12.0423 12.006 12.1477C11.9006 12.2532 11.7575 12.3125 11.6083 12.3125ZM12.1708 6.125H6.54579V5.5625C6.54579 4.81658 6.84211 4.10121 7.36955 3.57376C7.897 3.04632 8.61237 2.75 9.35829 2.75C10.1042 2.75 10.8196 3.04632 11.347 3.57376C11.8745 4.10121 12.1708 4.81658 12.1708 5.5625V6.125Z"
          fill="white"
        />
      </svg>
    );
  },
  logo: () => {
    return (
      <svg
        width="32"
        height="37"
        viewBox="0 0 32 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="36.7092" rx="4" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.8793 8.98199H14.3992L13.4945 13.6847H12.4945L13.5868 8.00699H14.1876L14.1889 8H23.0544L23.053 8.00699H23.0669L21.9746 13.6847H20.9746L21.8793 8.98199Z"
          fill="#105E46"
        />
        <rect
          width="12.3346"
          height="14.8015"
          transform="matrix(1 0 -0.188924 0.981992 11.6655 14.1742)"
          fill="#12805D"
        />
        <rect
          width="12.3346"
          height="14.8015"
          transform="matrix(1 0 -0.188924 0.981992 10.7963 13.4034)"
          fill="#02D693"
        />
      </svg>
    );
  },
  menu: () => {
    return (
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.125 15.8342H20H27.875M12.125 20.7092H27.875M12.125 25.5842H27.875"
          stroke="#1A1F16"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
      </svg>
    );
  },
  home: () => {
    return (
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6666 29.2806H11.1666C11.2108 29.2806 11.2532 29.2618 11.2845 29.2283C11.3157 29.1948 11.3333 29.1494 11.3333 29.102V21.4909C11.3329 21.4625 11.3388 21.4344 11.3506 21.4089C11.3624 21.3835 11.3797 21.3614 11.4011 21.3445C11.4224 21.3277 11.4472 21.3165 11.4734 21.312C11.4996 21.3075 11.5264 21.3097 11.5516 21.3185C11.934 21.4473 12.331 21.5191 12.7316 21.5319C12.7808 21.5319 12.8275 21.5342 12.8733 21.5342C13.6438 21.5361 14.402 21.3265 15.0754 20.9252C15.1264 20.8949 15.1837 20.8789 15.2421 20.8789C15.3004 20.8789 15.3578 20.8949 15.4087 20.9252C16.082 21.3265 16.84 21.5361 17.6104 21.5342C18.3765 21.5353 19.1298 21.3232 19.7963 20.9185C19.8477 20.8874 19.9058 20.871 19.9648 20.871C20.0239 20.871 20.082 20.8874 20.1334 20.9185C20.8099 21.3247 21.5729 21.5369 22.3484 21.5346C23.1196 21.5352 23.8776 21.3197 24.5472 20.9096C24.599 20.878 24.6576 20.8614 24.7172 20.8614C24.7768 20.8614 24.8354 20.878 24.8872 20.9096C25.5567 21.3197 26.3147 21.5352 27.086 21.5346C27.1314 21.5346 27.1772 21.5346 27.2264 21.5324H27.2289C27.6436 21.519 28.0543 21.4425 28.4489 21.3052C28.4739 21.2965 28.5004 21.2943 28.5263 21.2987C28.5523 21.3031 28.5769 21.3141 28.5981 21.3306C28.6194 21.3471 28.6366 21.3688 28.6486 21.3939C28.6605 21.4189 28.6668 21.4467 28.6668 21.4748V29.102C28.6668 29.1494 28.6844 29.1948 28.7156 29.2283C28.7469 29.2618 28.7893 29.2806 28.8335 29.2806H29.3126C29.6727 29.2806 29.9835 29.577 29.9993 29.9627C30.0034 30.0591 29.9892 30.1554 29.9575 30.2458C29.9259 30.3361 29.8775 30.4186 29.8153 30.4884C29.7531 30.5582 29.6783 30.6137 29.5955 30.6516C29.5127 30.6896 29.4235 30.7091 29.3335 30.7092H10.6874C10.3274 30.7092 10.0166 30.4127 10.0008 30.027C9.9967 29.9306 10.0109 29.8344 10.0426 29.744C10.0742 29.6537 10.1226 29.5711 10.1848 29.5014C10.247 29.4316 10.3218 29.3761 10.4046 29.3381C10.4874 29.3002 10.5765 29.2806 10.6666 29.2806V29.2806ZM21.3334 26.2449C21.3334 26.2922 21.3509 26.3377 21.3822 26.3712C21.4135 26.4046 21.4559 26.4235 21.5001 26.4235H25.1668C25.211 26.4235 25.2534 26.4046 25.2846 26.3712C25.3159 26.3377 25.3334 26.2922 25.3334 26.2449V23.3877C25.3334 23.2457 25.2808 23.1094 25.187 23.0089C25.0932 22.9085 24.966 22.852 24.8334 22.852H21.8334C21.7008 22.852 21.5736 22.9085 21.4798 23.0089C21.3861 23.1094 21.3334 23.2457 21.3334 23.3877V26.2449ZM14.8333 29.2806H17.8333C17.8776 29.2806 17.9199 29.2618 17.9512 29.2283C17.9825 29.1948 18 29.1494 18 29.102V23.3877C18 23.2457 17.9473 23.1094 17.8536 23.0089C17.7598 22.9085 17.6326 22.852 17.5 22.852H15.1667C15.034 22.852 14.9069 22.9085 14.8131 23.0089C14.7193 23.1094 14.6666 23.2457 14.6666 23.3877V29.102C14.6666 29.1494 14.6842 29.1948 14.7155 29.2283C14.7467 29.2618 14.7891 29.2806 14.8333 29.2806ZM10.1428 16.8824L11.9312 12.4855C12.3995 11.4065 13.4691 10.7092 14.6562 10.7092H25.3459C26.533 10.7092 27.6026 11.4065 28.071 12.4855L29.8593 16.8824C30.2343 17.7489 29.7389 18.6386 29.7385 18.6391L29.7268 18.6592C29.7064 18.694 29.6702 18.7485 29.6481 18.7833C29.646 18.786 29.6443 18.7891 29.6422 18.7922L29.4339 19.0623C29.4261 19.0725 29.4178 19.0822 29.4089 19.0913L29.2006 19.3069L29.1831 19.323C29.0607 19.4354 28.9298 19.5366 28.7918 19.6257V19.6279C28.3383 19.9222 27.8217 20.0863 27.2918 20.1043H27.1889C26.3871 20.1059 25.6145 19.7819 25.0268 19.1976L25.013 19.1837C24.9516 19.1218 24.8705 19.0872 24.7861 19.0872C24.7018 19.0872 24.6206 19.1218 24.5593 19.1837L24.5455 19.1976C23.9515 19.7809 23.175 20.1045 22.3692 20.1045C21.5635 20.1045 20.787 19.7809 20.193 19.1976C20.1313 19.1364 20.0505 19.1025 19.9665 19.1025C19.8825 19.1025 19.8017 19.1364 19.74 19.1976C19.1478 19.779 18.3741 20.1024 17.5708 20.1043C16.7675 20.1062 15.9925 19.7865 15.3979 19.2078C15.3372 19.1476 15.2575 19.1141 15.1748 19.1141C15.092 19.1141 15.0123 19.1476 14.9516 19.2078C14.3564 19.79 13.578 20.1102 12.772 20.1043H12.6683C12.1517 20.0836 11.649 19.9189 11.2099 19.6266C11.1704 19.6011 11.1324 19.5743 11.0941 19.5476C10.798 19.3337 10.5402 19.0643 10.3333 18.7525L10.2608 18.6351C10.2535 18.6232 10.2469 18.6107 10.2408 18.5976C10.1716 18.4467 9.80075 17.6708 10.1428 16.8824V16.8824Z"
          fill="#1A1F16"
        />
      </svg>
    );
  },
  homeActive: () => {
    return (
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.709167" width="40" height="40" rx="10" fill="#1A1F16" />
        <path
          d="M10.6666 29.2806H11.1666C11.2108 29.2806 11.2532 29.2618 11.2845 29.2283C11.3157 29.1948 11.3333 29.1494 11.3333 29.102V21.4909C11.3329 21.4625 11.3388 21.4344 11.3506 21.4089C11.3624 21.3835 11.3797 21.3614 11.4011 21.3445C11.4224 21.3277 11.4472 21.3165 11.4734 21.312C11.4996 21.3075 11.5264 21.3097 11.5516 21.3185C11.934 21.4473 12.331 21.5191 12.7316 21.5319C12.7808 21.5319 12.8275 21.5342 12.8733 21.5342C13.6438 21.5361 14.402 21.3265 15.0754 20.9252C15.1264 20.8949 15.1837 20.8789 15.2421 20.8789C15.3004 20.8789 15.3578 20.8949 15.4087 20.9252C16.082 21.3265 16.84 21.5361 17.6104 21.5342C18.3765 21.5353 19.1298 21.3232 19.7963 20.9185C19.8477 20.8874 19.9058 20.871 19.9648 20.871C20.0239 20.871 20.082 20.8874 20.1334 20.9185C20.8099 21.3247 21.5729 21.5369 22.3484 21.5346C23.1196 21.5352 23.8776 21.3197 24.5472 20.9096C24.599 20.878 24.6576 20.8614 24.7172 20.8614C24.7768 20.8614 24.8354 20.878 24.8872 20.9096C25.5567 21.3197 26.3147 21.5352 27.086 21.5346C27.1314 21.5346 27.1772 21.5346 27.2264 21.5324H27.2289C27.6436 21.519 28.0543 21.4425 28.4489 21.3052C28.4739 21.2965 28.5004 21.2943 28.5263 21.2987C28.5523 21.3031 28.5769 21.3141 28.5981 21.3306C28.6194 21.3471 28.6366 21.3688 28.6486 21.3939C28.6605 21.4189 28.6668 21.4467 28.6668 21.4748V29.102C28.6668 29.1494 28.6844 29.1948 28.7156 29.2283C28.7469 29.2618 28.7893 29.2806 28.8335 29.2806H29.3126C29.6727 29.2806 29.9835 29.577 29.9993 29.9627C30.0034 30.0591 29.9892 30.1554 29.9575 30.2458C29.9259 30.3361 29.8775 30.4186 29.8153 30.4884C29.7531 30.5582 29.6783 30.6137 29.5955 30.6516C29.5127 30.6896 29.4235 30.7091 29.3335 30.7092H10.6874C10.3274 30.7092 10.0166 30.4127 10.0008 30.027C9.9967 29.9306 10.0109 29.8344 10.0426 29.744C10.0742 29.6537 10.1226 29.5711 10.1848 29.5014C10.247 29.4316 10.3218 29.3761 10.4046 29.3381C10.4874 29.3002 10.5765 29.2806 10.6666 29.2806V29.2806ZM21.3334 26.2449C21.3334 26.2922 21.3509 26.3377 21.3822 26.3712C21.4135 26.4046 21.4559 26.4235 21.5001 26.4235H25.1668C25.211 26.4235 25.2534 26.4046 25.2846 26.3712C25.3159 26.3377 25.3334 26.2922 25.3334 26.2449V23.3877C25.3334 23.2457 25.2808 23.1094 25.187 23.0089C25.0932 22.9085 24.966 22.852 24.8334 22.852H21.8334C21.7008 22.852 21.5736 22.9085 21.4798 23.0089C21.3861 23.1094 21.3334 23.2457 21.3334 23.3877V26.2449ZM14.8333 29.2806H17.8333C17.8776 29.2806 17.9199 29.2618 17.9512 29.2283C17.9825 29.1948 18 29.1494 18 29.102V23.3877C18 23.2457 17.9473 23.1094 17.8536 23.0089C17.7598 22.9085 17.6326 22.852 17.5 22.852H15.1667C15.034 22.852 14.9069 22.9085 14.8131 23.0089C14.7193 23.1094 14.6666 23.2457 14.6666 23.3877V29.102C14.6666 29.1494 14.6842 29.1948 14.7155 29.2283C14.7467 29.2618 14.7891 29.2806 14.8333 29.2806ZM10.1428 16.8824L11.9312 12.4855C12.3995 11.4065 13.4691 10.7092 14.6562 10.7092H25.3459C26.533 10.7092 27.6026 11.4065 28.071 12.4855L29.8593 16.8824C30.2343 17.7489 29.7389 18.6386 29.7385 18.6391L29.7268 18.6592C29.7064 18.694 29.6702 18.7485 29.6481 18.7833C29.646 18.786 29.6443 18.7891 29.6422 18.7922L29.4339 19.0623C29.4261 19.0725 29.4178 19.0822 29.4089 19.0913L29.2006 19.3069L29.1831 19.323C29.0607 19.4354 28.9298 19.5366 28.7918 19.6257V19.6279C28.3383 19.9222 27.8217 20.0863 27.2918 20.1043H27.1889C26.3871 20.1059 25.6145 19.7819 25.0268 19.1976L25.013 19.1837C24.9516 19.1218 24.8705 19.0872 24.7861 19.0872C24.7018 19.0872 24.6206 19.1218 24.5593 19.1837L24.5455 19.1976C23.9515 19.7809 23.175 20.1045 22.3692 20.1045C21.5635 20.1045 20.787 19.7809 20.193 19.1976C20.1313 19.1364 20.0505 19.1025 19.9665 19.1025C19.8825 19.1025 19.8017 19.1364 19.74 19.1976C19.1478 19.779 18.3741 20.1024 17.5708 20.1043C16.7675 20.1062 15.9925 19.7865 15.3979 19.2078C15.3372 19.1476 15.2575 19.1141 15.1748 19.1141C15.092 19.1141 15.0123 19.1476 14.9516 19.2078C14.3564 19.79 13.578 20.1102 12.772 20.1043H12.6683C12.1517 20.0836 11.649 19.9189 11.2099 19.6266C11.1704 19.6011 11.1324 19.5743 11.0941 19.5476C10.798 19.3337 10.5402 19.0643 10.3333 18.7525L10.2608 18.6351C10.2535 18.6232 10.2469 18.6107 10.2408 18.5976C10.1716 18.4467 9.80075 17.6708 10.1428 16.8824V16.8824Z"
          fill="white"
        />
      </svg>
    );
  },
  cart: () => {
    return (
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.3117 16.6498C29.1727 16.5098 29.0073 16.3987 28.825 16.3231C28.6428 16.2475 28.4473 16.2087 28.25 16.2092H25.25V15.4592C25.25 14.0668 24.6969 12.7314 23.7123 11.7469C22.7277 10.7623 21.3924 10.2092 20 10.2092C18.6076 10.2092 17.2723 10.7623 16.2877 11.7469C15.3031 12.7314 14.75 14.0668 14.75 15.4592V16.2092H11.75C11.3522 16.2092 10.9706 16.3672 10.6893 16.6485C10.408 16.9298 10.25 17.3113 10.25 17.7092V27.8342C10.25 29.6623 11.7969 31.2092 13.625 31.2092H26.375C27.2593 31.2094 28.1086 30.8637 28.7413 30.2459C29.0596 29.9421 29.3132 29.577 29.4865 29.1726C29.6599 28.7682 29.7495 28.3328 29.75 27.8928V17.7092C29.7506 17.5124 29.7122 17.3174 29.637 17.1356C29.5617 16.9537 29.4512 16.7886 29.3117 16.6498ZM16.25 15.4592C16.25 14.4646 16.6451 13.5108 17.3483 12.8075C18.0516 12.1043 19.0054 11.7092 20 11.7092C20.9946 11.7092 21.9484 12.1043 22.6517 12.8075C23.3549 13.5108 23.75 14.4646 23.75 15.4592V16.2092H16.25V15.4592ZM25.25 19.9592C25.25 21.3516 24.6969 22.6869 23.7123 23.6715C22.7277 24.656 21.3924 25.2092 20 25.2092C18.6076 25.2092 17.2723 24.656 16.2877 23.6715C15.3031 22.6869 14.75 21.3516 14.75 19.9592V19.2092C14.75 19.0103 14.829 18.8195 14.9697 18.6788C15.1103 18.5382 15.3011 18.4592 15.5 18.4592C15.6989 18.4592 15.8897 18.5382 16.0303 18.6788C16.171 18.8195 16.25 19.0103 16.25 19.2092V19.9592C16.25 20.9537 16.6451 21.9076 17.3483 22.6108C18.0516 23.3141 19.0054 23.7092 20 23.7092C20.9946 23.7092 21.9484 23.3141 22.6517 22.6108C23.3549 21.9076 23.75 20.9537 23.75 19.9592V19.2092C23.75 19.0103 23.829 18.8195 23.9697 18.6788C24.1103 18.5382 24.3011 18.4592 24.5 18.4592C24.6989 18.4592 24.8897 18.5382 25.0303 18.6788C25.171 18.8195 25.25 19.0103 25.25 19.2092V19.9592Z"
          fill="#1A1F16"
        />
      </svg>
    );
  },
  cartActive: () => {
    return (
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.709167" width="40" height="40" rx="10" fill="#1A1F16" />
        <path
          d="M29.3117 16.6498C29.1727 16.5098 29.0073 16.3987 28.825 16.3231C28.6428 16.2475 28.4473 16.2087 28.25 16.2092H25.25V15.4592C25.25 14.0668 24.6969 12.7314 23.7123 11.7469C22.7277 10.7623 21.3924 10.2092 20 10.2092C18.6076 10.2092 17.2723 10.7623 16.2877 11.7469C15.3031 12.7314 14.75 14.0668 14.75 15.4592V16.2092H11.75C11.3522 16.2092 10.9706 16.3672 10.6893 16.6485C10.408 16.9298 10.25 17.3113 10.25 17.7092V27.8342C10.25 29.6623 11.7969 31.2092 13.625 31.2092H26.375C27.2593 31.2094 28.1086 30.8637 28.7413 30.2459C29.0596 29.9421 29.3132 29.577 29.4865 29.1726C29.6599 28.7682 29.7495 28.3328 29.75 27.8928V17.7092C29.7506 17.5124 29.7122 17.3174 29.637 17.1356C29.5617 16.9537 29.4512 16.7886 29.3117 16.6498ZM16.25 15.4592C16.25 14.4646 16.6451 13.5108 17.3483 12.8075C18.0516 12.1043 19.0054 11.7092 20 11.7092C20.9946 11.7092 21.9484 12.1043 22.6517 12.8075C23.3549 13.5108 23.75 14.4646 23.75 15.4592V16.2092H16.25V15.4592ZM25.25 19.9592C25.25 21.3516 24.6969 22.6869 23.7123 23.6715C22.7277 24.656 21.3924 25.2092 20 25.2092C18.6076 25.2092 17.2723 24.656 16.2877 23.6715C15.3031 22.6869 14.75 21.3516 14.75 19.9592V19.2092C14.75 19.0103 14.829 18.8195 14.9697 18.6788C15.1103 18.5382 15.3011 18.4592 15.5 18.4592C15.6989 18.4592 15.8897 18.5382 16.0303 18.6788C16.171 18.8195 16.25 19.0103 16.25 19.2092V19.9592C16.25 20.9537 16.6451 21.9076 17.3483 22.6108C18.0516 23.3141 19.0054 23.7092 20 23.7092C20.9946 23.7092 21.9484 23.3141 22.6517 22.6108C23.3549 21.9076 23.75 20.9537 23.75 19.9592V19.2092C23.75 19.0103 23.829 18.8195 23.9697 18.6788C24.1103 18.5382 24.3011 18.4592 24.5 18.4592C24.6989 18.4592 24.8897 18.5382 25.0303 18.6788C25.171 18.8195 25.25 19.0103 25.25 19.2092V19.9592Z"
          fill="white"
        />
      </svg>
    );
  },
  logout: () => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#E5252C" />
        <path
          d="M15.5 20C15.5 19.8011 15.579 19.6103 15.7197 19.4697C15.8603 19.329 16.0511 19.25 16.25 19.25H23V14.375C23 12.875 21.4161 11.75 20 11.75H12.875C12.179 11.7507 11.5118 12.0275 11.0197 12.5197C10.5275 13.0118 10.2507 13.679 10.25 14.375V25.625C10.2507 26.321 10.5275 26.9882 11.0197 27.4803C11.5118 27.9725 12.179 28.2493 12.875 28.25H20.375C21.071 28.2493 21.7382 27.9725 22.2303 27.4803C22.7225 26.9882 22.9993 26.321 23 25.625V20.75H16.25C16.0511 20.75 15.8603 20.671 15.7197 20.5303C15.579 20.3897 15.5 20.1989 15.5 20ZM29.5302 19.4698L25.7802 15.7198C25.6384 15.5851 25.4495 15.5111 25.254 15.5136C25.0584 15.5161 24.8715 15.5949 24.7332 15.7332C24.5949 15.8715 24.5161 16.0584 24.5136 16.254C24.5111 16.4495 24.5851 16.6384 24.7198 16.7802L27.1892 19.25H23V20.75H27.1892L24.7198 23.2198C24.6473 23.2888 24.5892 23.3716 24.5492 23.4633C24.5091 23.555 24.4878 23.6539 24.4865 23.754C24.4852 23.8541 24.504 23.9534 24.5417 24.0461C24.5794 24.1389 24.6353 24.2231 24.7061 24.2939C24.7769 24.3647 24.8611 24.4206 24.9539 24.4583C25.0466 24.496 25.1459 24.5148 25.246 24.5135C25.3461 24.5122 25.445 24.4909 25.5367 24.4508C25.6284 24.4108 25.7112 24.3527 25.7802 24.2802L29.5302 20.5302C29.6707 20.3895 29.7497 20.1988 29.7497 20C29.7497 19.8012 29.6707 19.6105 29.5302 19.4698Z"
          fill="white"
        />
      </svg>
    );
  },
  chevronBack: (svgClass?: string, pathClass?: string) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
      >
        <path
          className={pathClass}
          d="M15.375 5.25L8.625 12L15.375 18.75"
          stroke="#1A1F16"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
};
