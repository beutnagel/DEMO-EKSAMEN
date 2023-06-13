fetch("errorcode.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })

  .then((data) => {
    // Handle the loaded JSON data here
    const errorCodes = data.errorcode;
    console.log(errorCodes);

    // Set the data in the DOM
    const pAlertTekst = document.querySelector(".alert-tekst");
    const randomNumber = Math.floor(Math.random() * errorCodes.length);
    const clarification = errorCodes[randomNumber].clarification;
    pAlertTekst.textContent = clarification;
    console.log(randomNumber, pAlertTekst.textContent);

    /* TODO: please write some comment about what this code is meant to do.... */
    const statusAlert = document.querySelector(".headline--alert-tekst");
    statusAlert.textContent = ` ${errorCodes[randomNumber].status}`;

    const warningCircle = document.querySelector(".circle");
    const colorCode = errorCodes[randomNumber].color;
    console.log(colorCode);

    /* TODO: please write some comment about what this code is meant to do.... */
    if (colorCode === "okColor") {
      warningCircle.classList.add("okColor");
    } else if (colorCode === "warningColor") {
      warningCircle.classList.add("warningColor");
    } else if (colorCode === "alarmColor") {
      warningCircle.classList.add("alarmColor");
    }
  })

  /* TODO: besides console.log, should there also be some message for the user?
        E.g. Jacob Nielsen's 10 Heuristics, #9 Help users recognize, diagnose, and recover from errors
    */

  .catch((error) => {
    console.error("Could not fetch JSON:", error);
  });
