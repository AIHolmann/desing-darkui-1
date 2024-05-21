import styles from "./card.module.css";

const Card = ({ title, rate, information }) => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.titlecontainer}>
        <div className={styles.titlesubcontainer}>
          {title === "File Manager" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="30px"
              height="30px"
              viewBox="0 0 36 36"
              aria-hidden="true"
              role="img"
              class="iconify iconify--twemoji"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#269"
                d="M0 29a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4h-9c-3.562 0-3-5-8.438-5H4a4 4 0 0 0-4 4v22z"
              />
              <path
                fill="#55ACEE"
                d="M30 10h-6.562C18 10 18.562 15 15 15H6a4 4 0 0 0-4 4v10a1 1 0 1 1-2 0a4 4 0 0 0 4 4h26a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4z"
              />
            </svg>
          ) : title === "Report Data" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  style={{ fill: "#FF6029;" }}
                  d="M449.673,287.164C449.673,411.337,349.01,512,224.836,512S0,411.337,0,287.164 S100.663,62.327,224.836,62.327S449.673,162.989,449.673,287.164z"
                />{" "}
                <path
                  style={{ fill: "#B7441C;" }}
                  d="M449.673,287.164c0,14.877-1.46,29.411-4.217,43.481H225.878c-24.588,0-44.522-19.933-44.522-44.522 V66.544c14.07-2.757,28.604-4.217,43.481-4.217C349.01,62.327,449.673,162.989,449.673,287.164z"
                />{" "}
                <path
                  style={{ fill: "#FFBC00;" }}
                  d="M253.176,0.112c136.877,12.902,245.809,121.835,258.711,258.711c1.38,14.647-10.173,27.3-24.884,27.3 H238.368c-6.899,0-12.491-5.592-12.491-12.491V24.996C225.878,10.284,238.53-1.269,253.176,0.112z"
                />{" "}
                <path
                  style={{ fill: "#E0A000;" }}
                  d="M449.66,286.122H238.368c-6.899,0-12.491-5.592-12.491-12.491V62.34 C349.223,62.901,449.099,162.777,449.66,286.122z"
                />{" "}
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepSo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4.8916 9.61431C4.8916 9.21193 5.21525 8.88574 5.61449 8.88574H9.46991C9.86916 8.88574 10.1928 9.21193 10.1928 9.61431C10.1928 10.0167 9.86916 10.3429 9.46991 10.3429H5.61449C5.21525 10.3429 4.8916 10.0167 4.8916 9.61431Z"
                  fill="#1C274C"
                />{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.1884 10.0038C21.1262 9.99995 21.0584 9.99998 20.9881 10L20.9706 10H18.2149C15.9435 10 14 11.7361 14 14C14 16.2639 15.9435 18 18.2149 18H20.9706L20.9881 18C21.0584 18 21.1262 18 21.1884 17.9962C22.111 17.9397 22.927 17.2386 22.9956 16.2594C23.0001 16.1952 23 16.126 23 16.0619L23 16.0444V11.9556L23 11.9381C23 11.874 23.0001 11.8048 22.9956 11.7406C22.927 10.7614 22.111 10.0603 21.1884 10.0038ZM17.9706 15.0667C18.5554 15.0667 19.0294 14.5891 19.0294 14C19.0294 13.4109 18.5554 12.9333 17.9706 12.9333C17.3858 12.9333 16.9118 13.4109 16.9118 14C16.9118 14.5891 17.3858 15.0667 17.9706 15.0667Z"
                  fill="#1C274C"
                />{" "}
                <path
                  opacity="0.5"
                  d="M21.1394 10.0015C21.1394 8.82091 21.0965 7.55447 20.3418 6.64658C20.2689 6.55894 20.1914 6.47384 20.1088 6.39124C19.3604 5.64288 18.4114 5.31076 17.239 5.15314C16.0998 4.99997 14.6442 4.99999 12.8064 5H10.6936C8.85583 4.99999 7.40019 4.99997 6.26098 5.15314C5.08856 5.31076 4.13961 5.64288 3.39124 6.39124C2.64288 7.13961 2.31076 8.08856 2.15314 9.26098C1.99997 10.4002 1.99999 11.8558 2 13.6936V13.8064C1.99999 15.6442 1.99997 17.0998 2.15314 18.239C2.31076 19.4114 2.64288 20.3604 3.39124 21.1088C4.13961 21.8571 5.08856 22.1892 6.26098 22.3469C7.40018 22.5 8.8558 22.5 10.6935 22.5H12.8064C14.6442 22.5 16.0998 22.5 17.239 22.3469C18.4114 22.1892 19.3604 21.8571 20.1088 21.1088C20.3133 20.9042 20.487 20.6844 20.6346 20.4486C21.0851 19.7291 21.1394 18.8473 21.1394 17.9985C21.0912 18 21.0404 18 20.9882 18L18.2149 18C15.9435 18 14 16.2639 14 14C14 11.7361 15.9435 10 18.2149 10L20.9881 10C21.0403 9.99999 21.0912 9.99997 21.1394 10.0015Z"
                  fill="#1C274C"
                />{" "}
                <path
                  d="M10.1013 2.57211L7.99988 3.99253L6.2666 5.15237C7.40496 4.99997 8.8588 4.99999 10.6935 5H12.8063C14.6441 4.99998 16.0997 4.99997 17.2389 5.15314C17.4681 5.18394 17.6887 5.22142 17.9009 5.26737L15.9999 4L13.8874 2.57211C12.7588 1.8093 11.2299 1.8093 10.1013 2.57211Z"
                  fill="#1C274C"
                />{" "}
              </g>
            </svg>
          )}{" "}
          <span>{title}</span>
        </div>
        <div className={styles.rate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 8.60555C2 5.50969 4.50969 3 7.60555 3C8.71223 3 9.79414 3.32758 10.715 3.94145L12 4.79815L13.285 3.94145C14.2059 3.32758 15.2878 3 16.3944 3C19.4903 3 22 5.50969 22 8.60555V9.34382C22 11.3098 21.219 13.1952 19.8289 14.5853L14.1213 20.2929C12.9497 21.4645 11.0503 21.4645 9.87868 20.2929L4.1711 14.5853C2.78097 13.1952 2 11.3098 2 9.34382V8.60555Z"
                fill="#f1f1f1"
              />{" "}
            </g>
          </svg>{" "}
          <span>{rate}</span>
        </div>
      </div>
      <div className={styles.information}>
        <p>{information}</p>
      </div>
      <div
        className={
          title === "Report Data"
            ? `${styles.download}  ${styles.reportdata}`
            : styles.download
        }
      >
        <p>Download API</p>{" "}
        <button>
          Get{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke={title === "Report Data" ? "#151515" : "#f1f1f1"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Card;
