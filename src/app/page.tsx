import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topPage}>
      <svg 
      width="494" 
      height="205" 
      viewBox="0 0 494 205" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logo}
      >
        <path d="M132.6 162.25C124.65 162.25 117.7 160.5 111.75 157C105.85 153.45 101.25 148.525 97.95 142.225C94.65 135.875 93 128.475 93 120.025C93 111.175 94.625 103.525 97.875 97.075C101.125 90.575 105.65 85.575 111.45 82.075C117.3 78.525 124.15 76.75 132 76.75C140.15 76.75 147.075 78.625 152.775 82.375C158.525 86.125 162.825 91.475 165.675 98.425C168.575 105.375 169.825 113.65 169.425 123.25H155.925V118.45C155.775 108.5 153.75 101.075 149.85 96.175C145.95 91.225 140.15 88.75 132.45 88.75C124.2 88.75 117.925 91.4 113.625 96.7C109.325 102 107.175 109.6 107.175 119.5C107.175 129.05 109.325 136.45 113.625 141.7C117.925 146.95 124.05 149.575 132 149.575C137.35 149.575 142 148.35 145.95 145.9C149.9 143.45 153 139.925 155.25 135.325L168.075 139.75C164.925 146.9 160.175 152.45 153.825 156.4C147.525 160.3 140.45 162.25 132.6 162.25ZM102.675 123.25V112.525H162.525V123.25H102.675ZM201.683 162.25C195.633 162.25 190.558 161.15 186.458 158.95C182.408 156.7 179.333 153.75 177.233 150.1C175.183 146.45 174.158 142.45 174.158 138.1C174.158 133.85 174.958 130.175 176.558 127.075C178.208 123.925 180.508 121.325 183.458 119.275C186.408 117.175 189.933 115.525 194.033 114.325C197.883 113.275 202.183 112.375 206.933 111.625C211.733 110.825 216.583 110.1 221.483 109.45C226.383 108.8 230.958 108.175 235.208 107.575L230.408 110.35C230.558 103.15 229.108 97.825 226.058 94.375C223.058 90.925 217.858 89.2 210.458 89.2C205.558 89.2 201.258 90.325 197.558 92.575C193.908 94.775 191.333 98.375 189.833 103.375L177.158 99.55C179.108 92.45 182.883 86.875 188.483 82.825C194.083 78.775 201.458 76.75 210.608 76.75C217.958 76.75 224.258 78.075 229.508 80.725C234.808 83.325 238.608 87.275 240.908 92.575C242.058 95.075 242.783 97.8 243.083 100.75C243.383 103.65 243.533 106.7 243.533 109.9V160H231.683V140.575L234.458 142.375C231.408 148.925 227.133 153.875 221.633 157.225C216.183 160.575 209.533 162.25 201.683 162.25ZM203.708 151.075C208.508 151.075 212.658 150.225 216.158 148.525C219.708 146.775 222.558 144.5 224.708 141.7C226.858 138.85 228.258 135.75 228.908 132.4C229.658 129.9 230.058 127.125 230.108 124.075C230.208 120.975 230.258 118.6 230.258 116.95L234.908 118.975C230.558 119.575 226.283 120.15 222.083 120.7C217.883 121.25 213.908 121.85 210.158 122.5C206.408 123.1 203.033 123.825 200.033 124.675C197.833 125.375 195.758 126.275 193.808 127.375C191.908 128.475 190.358 129.9 189.158 131.65C188.008 133.35 187.433 135.475 187.433 138.025C187.433 140.225 187.983 142.325 189.083 144.325C190.233 146.325 191.983 147.95 194.333 149.2C196.733 150.45 199.858 151.075 203.708 151.075ZM289.808 198.25C285.558 198.25 281.408 197.6 277.358 196.3C273.308 195 269.583 193.025 266.183 190.375C262.833 187.775 260.033 184.475 257.783 180.475L270.008 174.025C272.008 177.975 274.833 180.85 278.483 182.65C282.183 184.45 285.983 185.35 289.883 185.35C295.033 185.35 299.308 184.4 302.708 182.5C306.108 180.65 308.608 177.875 310.208 174.175C311.858 170.475 312.658 165.875 312.608 160.375V138.25H314.183V79H326.033V160.525C326.033 162.725 325.958 164.85 325.808 166.9C325.708 168.95 325.458 170.975 325.058 172.975C324.008 178.725 321.933 183.45 318.833 187.15C315.733 190.9 311.733 193.675 306.833 195.475C301.933 197.325 296.258 198.25 289.808 198.25ZM288.833 162.25C281.283 162.25 274.808 160.375 269.408 156.625C264.008 152.825 259.833 147.7 256.883 141.25C253.983 134.8 252.533 127.525 252.533 119.425C252.533 111.325 253.983 104.05 256.883 97.6C259.833 91.15 264.008 86.075 269.408 82.375C274.808 78.625 281.258 76.75 288.758 76.75C296.408 76.75 302.833 78.6 308.033 82.3C313.233 86 317.158 91.075 319.808 97.525C322.508 103.975 323.858 111.275 323.858 119.425C323.858 127.475 322.508 134.75 319.808 141.25C317.158 147.7 313.233 152.825 308.033 156.625C302.833 160.375 296.433 162.25 288.833 162.25ZM290.483 150.025C295.933 150.025 300.408 148.725 303.908 146.125C307.408 143.475 309.983 139.85 311.633 135.25C313.333 130.6 314.183 125.325 314.183 119.425C314.183 113.425 313.333 108.15 311.633 103.6C309.983 99 307.433 95.425 303.983 92.875C300.533 90.275 296.158 88.975 290.858 88.975C285.358 88.975 280.808 90.325 277.208 93.025C273.658 95.725 271.008 99.375 269.258 103.975C267.558 108.575 266.708 113.725 266.708 119.425C266.708 125.175 267.583 130.375 269.333 135.025C271.083 139.625 273.708 143.275 277.208 145.975C280.758 148.675 285.183 150.025 290.483 150.025ZM376.075 160H333.475V159.1L345.625 158.35V52.6L333.475 52V51.1L363.925 50.5V158.35L376.075 159.1V160ZM418.707 162.25C410.757 162.25 403.807 160.5 397.857 157C391.957 153.45 387.357 148.525 384.057 142.225C380.757 135.875 379.107 128.475 379.107 120.025C379.107 111.175 380.732 103.525 383.982 97.075C387.232 90.575 391.757 85.575 397.557 82.075C403.407 78.525 410.257 76.75 418.107 76.75C426.257 76.75 433.182 78.625 438.882 82.375C444.632 86.125 448.932 91.475 451.782 98.425C454.682 105.375 455.932 113.65 455.532 123.25H442.032V118.45C441.882 108.5 439.857 101.075 435.957 96.175C432.057 91.225 426.257 88.75 418.557 88.75C410.307 88.75 404.032 91.4 399.732 96.7C395.432 102 393.282 109.6 393.282 119.5C393.282 129.05 395.432 136.45 399.732 141.7C404.032 146.95 410.157 149.575 418.107 149.575C423.457 149.575 428.107 148.35 432.057 145.9C436.007 143.45 439.107 139.925 441.357 135.325L454.182 139.75C451.032 146.9 446.282 152.45 439.932 156.4C433.632 160.3 426.557 162.25 418.707 162.25ZM388.782 123.25V112.525H448.632V123.25H388.782ZM465.701 160V145.3H480.401V160H465.701Z" fill="white"/>
        <path d="M91.5877 71.0515L106 57.9265V57H70.6667V57.9265L83.6842 71.2059L57.8041 148.257L60.9035 162L91.5877 71.0515Z" fill="url(#paint0_linear_48_18)"/>
        <path d="M39.3626 162H60.9035L57.8041 148.257L33.6287 58.6985L47.576 57.9265V57H0V57.9265L10.538 58.6985L39.3626 162Z" fill="#F5F3F4"/>
        <defs>
          <linearGradient id="paint0_linear_48_18" x1="53" y1="57" x2="52.9487" y2="162" gradientUnits="userSpaceOnUse">
            <stop offset="0.458333" stop-color="#F5F3F4"/>
            <stop offset="1" stop-color="#F5F3F4" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>



        <div className={styles.nav}>
          <a href="https://github.com/VeagleDev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              className={styles.icon}
            >
              <path
                d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
                fill="#F5F3F4"
              />
              <path
                d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"
                fill="#F5F3F4"
              />
            </svg>
          </a>

          <a href="https://www.instagram.com/veagle_off/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              className={styles.icon}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                fill="#F5F3F4"
              />
              <path
                d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                fill="#F5F3F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                fill="#F5F3F4"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.flexColumn}>
        <svg width="385" height="385" viewBox="0 0 385 385" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="385" height="385" rx="15" fill="#161A1D"/>
          <path d="M260.65 121.229L287.504 96.7294V95H221.669V96.7294L245.924 121.518L197.703 265.347L203.478 291L260.65 121.229Z" fill="url(#paint0_linear_52_15)"/>
          <path d="M163.342 291H203.478L197.703 265.347L152.658 98.1706L178.646 96.7294V95H90V96.7294L109.635 98.1706L163.342 291Z" fill="#F5F3F4"/>
          <path d="M216 290.721H295.703V289.956L284.311 289.318L266.392 205.403L277.784 204.765V204H236.441V204.765L247.833 205.403L265.752 289.446H226.457V260.114H225.689L216 290.721Z" fill="#F5F3F4" fill-opacity="0.8"/>
          <defs>
            <linearGradient id="paint0_linear_52_15" x1="188.752" y1="95" x2="188.656" y2="291" gradientUnits="userSpaceOnUse">
              <stop offset="0.458333" stop-color="#F5F3F4"/>
              <stop offset="1" stop-color="#F5F3F4" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>



        <h1>Bienvenue sur Veagle !</h1>
        <p className={styles.p}>Nous sommes heureux de vous recevoir ! Vous nous avez pris de cours, notre portfolio est en cours de developpement...</p>
        <a href="https://github.com/VeagleDev">Voir nos projet</a>
      </div>
    </main>
  );
}
