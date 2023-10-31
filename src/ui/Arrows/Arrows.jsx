/* eslint-disable react/prop-types */

export const Arrows = ({ variant }) => {
  switch (variant) {
    case "incommingCall":
      return (
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
              fill="#002CFB"
            />
          </svg>
        </span>
      );
    case "outgoingCall":
      return (
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z"
              fill="#28A879"
            />
          </svg>
        </span>
      );
  }
};
