/* eslint-disable react/prop-types */

export const Dots = ({ variant }) => {
  switch (variant) {
    case "Excellent":
      return (
        <div>
          <span>
            <svg
              width="28"
              height="8"
              viewBox="0 0 28 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#28A879" />
              <circle cx="14" cy="4" r="4" fill="#28A879" />
              <circle cx="24" cy="4" r="4" fill="#28A879" />
            </svg>
          </span>
        </div>
      );
    case "Good":
      return (
        <div>
          <span>
            <svg
              width="28"
              height="8"
              viewBox="0 0 28 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#ADBFDF" />
              <circle cx="14" cy="4" r="4" fill="#ADBFDF" />
            </svg>
          </span>
        </div>
      );
    case "Bad":
      return (
        <div>
          <span>
            <svg
              width="28"
              height="8"
              viewBox="0 0 28 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="8" fill="#E5E5E5" />
              <g id="UI kit">
                <rect
                  width="1600"
                  height="6221"
                  transform="translate(-141 -88)"
                  fill="white"
                />
                <g id="Component 25">
                  <g id="Property 1=Variant3">
                    <circle
                      id="Ellipse 31"
                      cx="4"
                      cy="4"
                      r="4"
                      fill="#EA1A4F"
                    />
                  </g>
                  <rect
                    x="-15.5"
                    y="-63.5"
                    width="59"
                    height="87"
                    rx="4.5"
                    stroke="#7B61FF"
                    strokeDasharray="10 5"
                  />
                </g>
              </g>
            </svg>
          </span>
        </div>
      );
  }
};
