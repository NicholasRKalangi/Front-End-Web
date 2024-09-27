// arrow function
const message = () => {
    const Title = "Personal Information"
    const Name = "Nicholas Robert Kalangi"
    const Age = "30 years old"
    const Status = "Single"
    const Major = "Informatics"
    const Faculty = "Computer Science"
    const Address = "Jln. Raya Manado, Airmadidi"
    const Interests = "Origami, Gaming"
  
    return `
        <br /><br /><br /><br /><br />
        <center>
        <table border="10"><tr><td>
        <h2 style="color: blue; text-align: center;">${Title}</h2>
        <hr /> 
        <h4 style="color: black; text-align: center;"><strong>Name:</strong> ${Name}</h4>
        <h4 style="color: black; text-align: center;"><strong>Age:</strong> ${Age}</h4>
        <h4 style="color: black; text-align: center;"><strong>Status:</strong> ${Status}</h4>
        <h4 style="color: black; text-align: center;"><strong>Major:</strong> ${Major}</h4>
        <h4 style="color: black; text-align: center;"><strong>Faculty:</strong> ${Faculty}</h4>
        <h4 style="color: black; text-align: center;"><strong>Address:</strong> ${Address}</h4>
        <h4 style="color: black; text-align: center;"><strong>Interests:</strong> ${Interests}</h4>
        </tr></td></table>
        </center>
    `;
  };
  
  // export
  export default message;