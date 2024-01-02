const Greetings = (person) =>{
    let timeOfDay = new Date().getHours()
    const day = timeOfDay < 11 ? "Morning": timeOfDay > 11 && timeOfDay < 15? "Afternoon": timeOfDay > 15 && timeOfDay < 17 ? "Evening" : timeOfDay > 17 && timeOfDay < 25 ? "Night" : "Day";



    console.log(`Good ${day}, ${person} `);
}

module.exports = Greetings

