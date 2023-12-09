export function Instagram({ Width, Height, Fill = "000", Stroke = "000" }) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0C10.9294 0 10.4175 0.01875 8.81812 0.09C7.21875 0.165 6.12937 0.41625 5.175 0.7875C4.17393 1.16404 3.26717 1.75467 2.51813 2.51813C1.75514 3.26756 1.16458 4.1742 0.7875 5.175C0.41625 6.1275 0.163125 7.21875 0.09 8.8125C0.01875 10.4156 0 10.9256 0 15.0019C0 19.0744 0.01875 19.5844 0.09 21.1838C0.165 22.7812 0.41625 23.8706 0.7875 24.825C1.17188 25.8112 1.68375 26.6475 2.51813 27.4819C3.35063 28.3162 4.18687 28.83 5.17313 29.2125C6.12937 29.5837 7.21688 29.8369 8.81437 29.91C10.4156 29.9812 10.9256 30 15 30C19.0744 30 19.5825 29.9812 21.1838 29.91C22.7794 29.835 23.8725 29.5837 24.8269 29.2125C25.8273 28.8358 26.7334 28.2451 27.4819 27.4819C28.3162 26.6475 28.8281 25.8112 29.2125 24.825C29.5819 23.8706 29.835 22.7812 29.91 21.1838C29.9812 19.5844 30 19.0744 30 15C30 10.9256 29.9812 10.4156 29.91 8.81437C29.835 7.21875 29.5819 6.1275 29.2125 5.175C28.8355 4.17417 28.2449 3.26752 27.4819 2.51813C26.7331 1.75439 25.8262 1.16371 24.825 0.7875C23.8687 0.41625 22.7775 0.163125 21.1819 0.09C19.5806 0.01875 19.0725 0 14.9963 0H15.0019H15ZM13.6556 2.70375H15.0019C19.0069 2.70375 19.4812 2.71688 21.0619 2.79C22.5244 2.85563 23.3194 3.10125 23.8481 3.30562C24.5475 3.5775 25.0481 3.90375 25.5731 4.42875C26.0981 4.95375 26.4225 5.4525 26.6944 6.15375C26.9006 6.68062 27.1444 7.47563 27.21 8.93813C27.2831 10.5188 27.2981 10.9931 27.2981 14.9963C27.2981 18.9994 27.2831 19.4756 27.21 21.0562C27.1444 22.5187 26.8988 23.3119 26.6944 23.8406C26.4539 24.4919 26.07 25.0808 25.5712 25.5637C25.0462 26.0887 24.5475 26.4131 23.8463 26.685C23.3213 26.8913 22.5262 27.135 21.0619 27.2025C19.4812 27.2738 19.0069 27.2906 15.0019 27.2906C10.9969 27.2906 10.5206 27.2738 8.94 27.2025C7.4775 27.135 6.68437 26.8913 6.15562 26.685C5.50406 26.4449 4.91461 26.0617 4.43062 25.5637C3.93141 25.0801 3.54698 24.4906 3.30562 23.8387C3.10125 23.3119 2.85563 22.5169 2.79 21.0544C2.71875 19.4738 2.70375 18.9994 2.70375 14.9925C2.70375 10.9875 2.71875 10.515 2.79 8.93437C2.8575 7.47187 3.10125 6.67688 3.3075 6.14813C3.57938 5.44875 3.90562 4.94812 4.43062 4.42312C4.95563 3.89812 5.45437 3.57375 6.15562 3.30188C6.68437 3.09563 7.4775 2.85188 8.94 2.78437C10.3238 2.72062 10.86 2.70188 13.6556 2.7V2.70375ZM23.0081 5.19375C22.7717 5.19375 22.5377 5.24031 22.3193 5.33077C22.1009 5.42123 21.9025 5.55381 21.7353 5.72096C21.5682 5.8881 21.4356 6.08653 21.3451 6.30492C21.2547 6.52331 21.2081 6.75737 21.2081 6.99375C21.2081 7.23013 21.2547 7.46419 21.3451 7.68258C21.4356 7.90097 21.5682 8.0994 21.7353 8.26654C21.9025 8.43369 22.1009 8.56627 22.3193 8.65673C22.5377 8.74719 22.7717 8.79375 23.0081 8.79375C23.4855 8.79375 23.9434 8.60411 24.2809 8.26654C24.6185 7.92898 24.8081 7.47114 24.8081 6.99375C24.8081 6.51636 24.6185 6.05852 24.2809 5.72096C23.9434 5.38339 23.4855 5.19375 23.0081 5.19375ZM15.0019 7.2975C13.9801 7.28156 12.9654 7.46904 12.0168 7.84901C11.0682 8.22899 10.2047 8.79388 9.47653 9.51079C8.74835 10.2277 8.17006 11.0823 7.77533 12.0249C7.3806 12.9674 7.17731 13.9791 7.17731 15.0009C7.17731 16.0228 7.3806 17.0345 7.77533 17.977C8.17006 18.9196 8.74835 19.7742 9.47653 20.4911C10.2047 21.208 11.0682 21.7729 12.0168 22.1529C12.9654 22.5328 13.9801 22.7203 15.0019 22.7044C17.0241 22.6728 18.9529 21.8473 20.3718 20.4061C21.7908 18.9649 22.5861 17.0234 22.5861 15.0009C22.5861 12.9784 21.7908 11.037 20.3718 9.59578C18.9529 8.15454 17.0241 7.32905 15.0019 7.2975ZM15.0019 9.99938C16.3281 9.99938 17.6001 10.5262 18.5379 11.464C19.4757 12.4018 20.0025 13.6738 20.0025 15C20.0025 16.3262 19.4757 17.5982 18.5379 18.536C17.6001 19.4738 16.3281 20.0006 15.0019 20.0006C13.6756 20.0006 12.4037 19.4738 11.4659 18.536C10.5281 17.5982 10.0013 16.3262 10.0013 15C10.0013 13.6738 10.5281 12.4018 11.4659 11.464C12.4037 10.5262 13.6756 9.99938 15.0019 9.99938Z"
        fill={Fill}
      />
    </svg>
  );
}
export function Twitter({ Width, Height, Fill = "000", Stroke = "000" }) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 2.96969C27.9335 3.45785 26.773 3.80918 25.5776 3.94602C26.8187 3.16361 27.7481 1.92753 28.1914 0.469689C27.0268 1.20486 25.751 1.72037 24.4205 1.99336C23.8644 1.36254 23.1919 0.859999 22.4448 0.517054C21.6977 0.174109 20.892 -0.00189269 20.078 1.53491e-05C16.7845 1.53491e-05 14.1358 2.83285 14.1358 6.30918C14.1358 6.79735 14.1916 7.28551 14.2822 7.75519C9.35068 7.48152 4.95241 4.98152 2.02836 1.15386C1.49557 2.11952 1.21637 3.21904 1.21981 4.33803C1.21981 6.52738 2.26884 8.45785 3.86853 9.5932C2.92581 9.55381 2.00516 9.27885 1.18147 8.79069V8.86835C1.18147 11.9342 3.22377 14.4749 5.94568 15.0592C5.43461 15.2 4.90887 15.2721 4.38084 15.2737C3.99399 15.2737 3.62805 15.233 3.25862 15.1775C4.01142 17.6775 6.20358 19.4933 8.81396 19.5525C6.77166 21.25 4.21356 22.2485 1.43589 22.2485C0.937508 22.2485 0.477467 22.23 0 22.1709C2.63478 23.9645 5.76097 25 9.12763 25C20.0571 25 26.0376 15.392 26.0376 7.05253C26.0376 6.77886 26.0376 6.50519 26.0202 6.23152C27.1773 5.33285 28.1914 4.21969 29 2.96969Z"
        fill={Fill}
      />
    </svg>
  );
}
export function Facebook({ Width, Height, Fill = "000", Stroke = "000" }) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 15 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 16.675H13.5714L15 10.875H10V7.975C10 6.4815 10 5.075 12.8571 5.075H15V0.203C14.5343 0.14065 12.7757 0 10.9186 0C7.04 0 4.28571 2.40265 4.28571 6.815V10.875H0V16.675H4.28571V29H10V16.675Z"
        fill={Fill}
      />
    </svg>
  );
}
export function Discord({ Width, Height, Fill = "000", Stroke = "000" }) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 31 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2299 2.07765C24.2665 1.10916 22.1408 0.406216 19.9264 7.18534e-05C19.907 -0.000585167 19.8877 0.0032702 19.8698 0.011367C19.852 0.0194637 19.836 0.0316052 19.8231 0.0469349C19.5574 0.562425 19.2473 1.23412 19.0407 1.74961C16.692 1.37471 14.3034 1.37471 11.9548 1.74961C11.7481 1.2185 11.4381 0.562425 11.1576 0.0469349C11.1428 0.0156931 11.0985 7.18534e-05 11.0543 7.18534e-05C8.83991 0.406216 6.7289 1.10916 4.75075 2.07765C4.73599 2.07765 4.72123 2.09327 4.70647 2.10889C0.691118 8.46661 -0.416055 14.6525 0.130151 20.7759C0.130151 20.8071 0.144913 20.8384 0.174437 20.854C2.83165 22.9159 5.38553 24.1656 7.90989 24.9935C7.95417 25.0091 7.99846 24.9935 8.01322 24.9623C8.60372 24.1031 9.13516 23.1971 9.59279 22.2442C9.62232 22.1818 9.59279 22.1193 9.53374 22.1037C8.69229 21.76 7.89513 21.3539 7.11272 20.8852C7.05367 20.854 7.05367 20.7603 7.09796 20.7134C7.26035 20.5884 7.42273 20.4478 7.58512 20.3229C7.61464 20.2916 7.65893 20.2916 7.68845 20.3073C12.7667 22.7597 18.2435 22.7597 23.2627 20.3073C23.2922 20.2916 23.3365 20.2916 23.366 20.3229C23.5284 20.4635 23.6908 20.5884 23.8532 20.729C23.9122 20.7759 23.9122 20.8696 23.8384 20.9008C23.0708 21.3851 22.2589 21.7756 21.4174 22.1193C21.3584 22.1349 21.3436 22.213 21.3584 22.2599C21.8307 23.2127 22.3622 24.1188 22.9379 24.9779C22.9822 24.9935 23.0265 25.0091 23.0708 24.9935C25.6099 24.1656 28.1638 22.9159 30.821 20.854C30.8505 20.8384 30.8653 20.8071 30.8653 20.7759C31.5148 13.6996 29.7876 7.56059 26.289 2.10889C26.2742 2.09327 26.2594 2.07765 26.2299 2.07765ZM10.3604 17.0425C8.83991 17.0425 7.57035 15.5585 7.57035 13.7309C7.57035 11.9032 8.81039 10.4192 10.3604 10.4192C11.9252 10.4192 13.1653 11.9188 13.1505 13.7309C13.1505 15.5585 11.9105 17.0425 10.3604 17.0425ZM20.6498 17.0425C19.1292 17.0425 17.8597 15.5585 17.8597 13.7309C17.8597 11.9032 19.0997 10.4192 20.6498 10.4192C22.2146 10.4192 23.4546 11.9188 23.4398 13.7309C23.4398 15.5585 22.2146 17.0425 20.6498 17.0425Z"
        fill={Fill}
      />
    </svg>
  );
}
export function ExclamationCircle({
  Width,
  Height,
  Fill = "000",
  Stroke = "#008170",
}) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9.72363"
        cy="9"
        r="8.64"
        stroke={Stroke}
        stroke-width="0.72"
      />
      <mask
        id="path-2-outside-1_291_19673"
        maskUnits="userSpaceOnUse"
        x="8.2832"
        y="3.51953"
        width="3"
        height="10"
        fill="black"
      >
        <rect fill="white" x="8.2832" y="3.51953" width="3" height="10" />
        <path d="M9.11161 12.5195V6.62862H10.0167V12.5195H9.11161ZM9.57184 5.6468C9.39542 5.6468 9.24329 5.58672 9.11545 5.46655C8.99016 5.34638 8.92752 5.20192 8.92752 5.03317C8.92752 4.86442 8.99016 4.71996 9.11545 4.59979C9.24329 4.47962 9.39542 4.41953 9.57184 4.41953C9.74826 4.41953 9.89911 4.47962 10.0244 4.59979C10.1522 4.71996 10.2162 4.86442 10.2162 5.03317C10.2162 5.20192 10.1522 5.34638 10.0244 5.46655C9.89911 5.58672 9.74826 5.6468 9.57184 5.6468Z" />
      </mask>
      <path
        d="M9.11161 12.5195V6.62862H10.0167V12.5195H9.11161ZM9.57184 5.6468C9.39542 5.6468 9.24329 5.58672 9.11545 5.46655C8.99016 5.34638 8.92752 5.20192 8.92752 5.03317C8.92752 4.86442 8.99016 4.71996 9.11545 4.59979C9.24329 4.47962 9.39542 4.41953 9.57184 4.41953C9.74826 4.41953 9.89911 4.47962 10.0244 4.59979C10.1522 4.71996 10.2162 4.86442 10.2162 5.03317C10.2162 5.20192 10.1522 5.34638 10.0244 5.46655C9.89911 5.58672 9.74826 5.6468 9.57184 5.6468Z"
        fill={Stroke}
      />
      <path
        d="M9.11161 12.5195H8.79018V12.841H9.11161V12.5195ZM9.11161 6.62862V6.30719H8.79018V6.62862H9.11161ZM10.0167 6.62862H10.3382V6.30719H10.0167V6.62862ZM10.0167 12.5195V12.841H10.3382V12.5195H10.0167ZM9.11545 5.46655L8.89294 5.69853L8.8953 5.70075L9.11545 5.46655ZM9.11545 4.59979L8.89529 4.36557L8.89295 4.36782L9.11545 4.59979ZM10.0244 4.59979L9.80188 4.83177L9.80425 4.83399L10.0244 4.59979ZM10.0244 5.46655L9.80424 5.23233L9.8019 5.23458L10.0244 5.46655ZM9.43304 12.5195V6.62862H8.79018V12.5195H9.43304ZM9.11161 6.95005H10.0167V6.30719H9.11161V6.95005ZM9.6953 6.62862V12.5195H10.3382V6.62862H9.6953ZM10.0167 12.1981H9.11161V12.841H10.0167V12.1981ZM9.57184 5.32538C9.47673 5.32538 9.40346 5.29614 9.3356 5.23235L8.8953 5.70075C9.08311 5.8773 9.31411 5.96823 9.57184 5.96823V5.32538ZM9.33795 5.23458C9.27382 5.17306 9.24895 5.11155 9.24895 5.03317H8.60609C8.60609 5.29228 8.70651 5.51969 8.89295 5.69852L9.33795 5.23458ZM9.24895 5.03317C9.24895 4.95478 9.27382 4.89327 9.33795 4.83176L8.89295 4.36782C8.70651 4.54664 8.60609 4.77405 8.60609 5.03317H9.24895ZM9.3356 4.83399C9.40346 4.77019 9.47673 4.74096 9.57184 4.74096V4.0981C9.31411 4.0981 9.08311 4.18904 8.8953 4.36558L9.3356 4.83399ZM9.57184 4.74096C9.66683 4.74096 9.73754 4.77002 9.8019 4.83176L10.2469 4.36782C10.0607 4.18921 9.82969 4.0981 9.57184 4.0981V4.74096ZM9.80425 4.83399C9.87035 4.89613 9.89473 4.95701 9.89473 5.03317H10.5376C10.5376 4.77183 10.4341 4.54379 10.2445 4.36558L9.80425 4.83399ZM9.89473 5.03317C9.89473 5.10933 9.87035 5.17021 9.80425 5.23235L10.2445 5.70075C10.4341 5.52255 10.5376 5.29451 10.5376 5.03317H9.89473ZM9.8019 5.23458C9.73754 5.29631 9.66683 5.32538 9.57184 5.32538V5.96823C9.82969 5.96823 10.0607 5.87713 10.2469 5.69852L9.8019 5.23458Z"
        fill={Stroke}
        mask="url(#path-2-outside-1_291_19673)"
      />
    </svg>
  );
}
export function Person({ Width, Height, Fill = "000", Stroke = "#008170" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={Width}
      height={Height}
      fill={Fill}
      class="bi bi-person-circle"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path
        fill-rule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
      />
    </svg>
  );
}
export function PlusFill({ Width, Height, Fill = "000", Stroke = "#008170" }) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="5" fill="#008170" />
      <path
        d="M24.0062 14.0617C24.0062 14.3782 23.8805 14.6817 23.6567 14.9055C23.4329 15.1293 23.1294 15.255 22.8129 15.255H15.255V22.8129C15.255 23.1294 15.1293 23.4329 14.9055 23.6567C14.6817 23.8805 14.3782 24.0062 14.0617 24.0062C13.7452 24.0062 13.4417 23.8805 13.2179 23.6567C12.9941 23.4329 12.8684 23.1294 12.8684 22.8129V15.255H5.31053C4.99403 15.255 4.6905 15.1293 4.46671 14.9055C4.24291 14.6817 4.11719 14.3782 4.11719 14.0617C4.11719 13.7452 4.24291 13.4417 4.46671 13.2179C4.6905 12.9941 4.99403 12.8684 5.31053 12.8684H12.8684V5.31053C12.8684 4.99403 12.9941 4.6905 13.2179 4.46671C13.4417 4.24291 13.7452 4.11719 14.0617 4.11719C14.3782 4.11719 14.6817 4.24291 14.9055 4.46671C15.1293 4.6905 15.255 4.99403 15.255 5.31053V12.8684H22.8129C23.1294 12.8684 23.4329 12.9941 23.6567 13.2179C23.8805 13.4417 24.0062 13.7452 24.0062 14.0617Z"
        fill={Fill}
      />
    </svg>
  );
}
export function MinusFill({ Width, Height, Fill = "000", Stroke = "#008170" }) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="5" fill="#808080" />
      <path
        d="M24.0062 13.6794C24.0062 14.0311 23.8805 14.3684 23.6567 14.617C23.4329 14.8657 23.1294 15.0054 22.8129 15.0054H5.31053C4.99403 15.0054 4.6905 14.8657 4.46671 14.617C4.24291 14.3684 4.11719 14.0311 4.11719 13.6794C4.11719 13.3278 4.24291 12.9905 4.46671 12.7419C4.6905 12.4932 4.99403 12.3535 5.31053 12.3535H22.8129C23.1294 12.3535 23.4329 12.4932 23.6567 12.7419C23.8805 12.9905 24.0062 13.3278 24.0062 13.6794Z"
        fill={Fill}
      />
    </svg>
  );
}
export function Close({ Width, Height, Fill = "000", Stroke = "#008170" }) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.36971 1.29971C8.44137 1.23056 8.49855 1.14783 8.5379 1.05634C8.57725 0.964857 8.59798 0.866452 8.59889 0.766868C8.5998 0.667285 8.58088 0.568516 8.54321 0.476327C8.50554 0.384137 8.44989 0.300372 8.37951 0.22992C8.30912 0.159467 8.22541 0.103738 8.13325 0.0659841C8.0411 0.02823 7.94235 0.00920731 7.84276 0.0100254C7.74318 0.0108435 7.64476 0.0314862 7.55323 0.0707492C7.46171 0.110012 7.37893 0.167109 7.30971 0.238708L4.30371 3.24371L1.29871 0.238708C1.23005 0.165022 1.14725 0.105919 1.05525 0.0649275C0.963247 0.0239355 0.863934 0.0018935 0.763231 0.00011672C0.662528 -0.00166006 0.562499 0.0168648 0.469111 0.0545858C0.375723 0.0923068 0.290889 0.148451 0.21967 0.21967C0.148451 0.290889 0.0923068 0.375722 0.0545858 0.46911C0.0168648 0.562499 -0.00166006 0.662528 0.00011672 0.763231C0.0018935 0.863934 0.0239355 0.963247 0.0649275 1.05525C0.105919 1.14725 0.165022 1.23005 0.238708 1.29871L3.24171 4.30471L0.236709 7.30971C0.104229 7.45188 0.0321051 7.63993 0.0355333 7.83423C0.0389615 8.02853 0.117674 8.21392 0.255087 8.35133C0.3925 8.48874 0.577885 8.56745 0.772186 8.57088C0.966487 8.57431 1.15453 8.50219 1.29671 8.36971L4.30371 5.36471L7.30871 8.37071C7.45088 8.50319 7.63893 8.57531 7.83323 8.57188C8.02753 8.56846 8.21292 8.48974 8.35033 8.35233C8.48774 8.21492 8.56645 8.02953 8.56988 7.83523C8.57331 7.64093 8.50119 7.45288 8.36871 7.31071L5.36571 4.30471L8.36971 1.29971Z"
        fill={Fill}
      />
    </svg>
  );
}
export function PlusCircle({
  Width,
  Height,
  Fill = "000",
  Stroke = "#008170",
}) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.210938"
        y="0.105469"
        width="15.7895"
        height="15.7895"
        rx="7.89474"
        fill="url(#paint0_linear_283_18868)"
      />
      <path
        d="M8.10547 4.92969V11.07"
        stroke="white"
        stroke-width="1.31579"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.03613 8H11.1765"
        stroke="white"
        stroke-width="1.31579"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_283_18868"
          x1="8.10567"
          y1="0.105469"
          x2="8.10567"
          y2="15.8949"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#94A3B8" />
          <stop offset="1" stop-color="#717D8C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function MinusCircle({
  Width,
  Height,
  Fill = "000",
  Stroke = "#008170",
}) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.105469"
        width="15.7895"
        height="15.7895"
        rx="7.89474"
        fill="url(#paint0_linear_283_18871)"
      />
      <path
        d="M4.8252 8H10.9655"
        stroke="white"
        stroke-width="1.31579"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_283_18871"
          x1="7.89474"
          y1="0.105469"
          x2="7.89474"
          y2="15.8949"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#94A3B8" />
          <stop offset="1" stop-color="#717D8C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function MinusSquare({
  Width,
  Height,
  Fill = "#008170",
  Stroke = "#008170",
}) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7778 10.8036H4.22222V8.69249H14.7778M16.8889 0.248047H2.11111C0.939444 0.248047 0 1.18749 0 2.35916V17.1369C0 17.6968 0.22242 18.2338 0.61833 18.6297C1.01424 19.0256 1.55121 19.248 2.11111 19.248H16.8889C17.4488 19.248 17.9858 19.0256 18.3817 18.6297C18.7776 18.2338 19 17.6968 19 17.1369V2.35916C19 1.79926 18.7776 1.26229 18.3817 0.866377C17.9858 0.470467 17.4488 0.248047 16.8889 0.248047Z"
        fill={Fill}
      />
    </svg>
  );
}
export function PlusSquare({
  Width,
  Height,
  Fill = "#008170",
  Stroke = "#008170",
}) {
  return (
    <svg
      width={Width}
      height={Height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4167 0H1.58333C1.16341 0 0.76068 0.166815 0.463748 0.463748C0.166815 0.76068 0 1.16341 0 1.58333V17.4167C0 17.8366 0.166815 18.2393 0.463748 18.5363C0.76068 18.8332 1.16341 19 1.58333 19H17.4167C17.8366 19 18.2393 18.8332 18.5363 18.5363C18.8332 18.2393 19 17.8366 19 17.4167V1.58333C19 1.16341 18.8332 0.76068 18.5363 0.463748C18.2393 0.166815 17.8366 0 17.4167 0ZM15.0417 10.2917H10.2917V15.0417C10.2917 15.2516 10.2083 15.453 10.0598 15.6015C9.91133 15.7499 9.70996 15.8333 9.5 15.8333C9.29004 15.8333 9.08867 15.7499 8.94021 15.6015C8.79174 15.453 8.70833 15.2516 8.70833 15.0417V10.2917H3.95833C3.74837 10.2917 3.54701 10.2083 3.39854 10.0598C3.25007 9.91133 3.16667 9.70996 3.16667 9.5C3.16667 9.29004 3.25007 9.08867 3.39854 8.94021C3.54701 8.79174 3.74837 8.70833 3.95833 8.70833H8.70833V3.95833C8.70833 3.74837 8.79174 3.54701 8.94021 3.39854C9.08867 3.25007 9.29004 3.16667 9.5 3.16667C9.70996 3.16667 9.91133 3.25007 10.0598 3.39854C10.2083 3.54701 10.2917 3.74837 10.2917 3.95833V8.70833H15.0417C15.2516 8.70833 15.453 8.79174 15.6015 8.94021C15.7499 9.08867 15.8333 9.29004 15.8333 9.5C15.8333 9.70996 15.7499 9.91133 15.6015 10.0598C15.453 10.2083 15.2516 10.2917 15.0417 10.2917Z"
        fill="#008170"
      />
    </svg>
  );
}
export function Search({
  Width,
  Height,
  Fill = "#008170",
  Stroke = "#008170",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={Width}
      height={Height}
      fill={Fill}
      class="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );
}
export function ArrowLeft({
  Width,
  Height,
  Fill = "#008170",
  Stroke = "#008170",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={Width}
      height={Height}
      fill={Fill}
      class="bi bi-chevron-left"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
}
