function calculateIMC() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = (weight/ (height * height)).toFixed(2);

    if(!isNaN(bmi)){
        const value = document.getElementById("value");
        let description = "";

        value.classList.add("attention");

        document.getElementById("infos").classList.remove("hidden")

        if(bmi < 18.5){
            description = "Cuidado! Chassi de grilo 😮";

        }else if(bmi >= 18.5 && bmi < 25){

            description = "Parabens vc esta no peso ideal 😋";
            value.classList.remove("attention");
            value.classList.add("normal");

        }else if (bmi >= 25 && bmi < 30){

            description = "Cuidado! Vc esta qse do mesmo tamanho da thais carla 😍";
        }else {

            description = "Vish Thais Carla que isso,vamo com calma 😑";
        }
        document.getElementById("description").textContent = description
        document.getElementById("value").textContent = bmi
    }
}