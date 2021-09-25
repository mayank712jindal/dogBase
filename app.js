const fetchDogData = async () => {
    let data = new Object();
    var settings = {
        url: "https://api.thedogapi.com/v1/images/search?limit=20",
        method: "GET",
        timeout: 0,
        headers: {
            //     TODO: PUT IN ENV VARIABLES
            "x-api-key": "d5fcea9d-4532-43da-891a-169b7ff4698e"
        }
    };

    data = await $.ajax(settings).done(function (response) {
        // console.log(response);
        return response;
    });
    return data;
};

const buildCards = (data) => {
    const cardsContainer = $(".cards-container");
    //   Extracting fields from data
    data.forEach((item) => {
        if (item.breeds.length) {
            console.log(item);
            const dog = item.breeds[0];
            const element = `
        <div class="card" >
            <img src=${item.url} class="card-img-top" alt=${dog.name}>
            <div class="card-body">
              <h3 class="card-title mb-3">${dog.name}</h3>
              <p><strong>Weight</strong> : ${dog.weight.metric}</p>
              <p><strong>Height</strong> : ${dog.height.metric}</p>
                          <p><strong>Breed Group</strong> : ${dog.breed_group}</p>
                                      <p><strong>Bred For</strong> : ${dog.bred_for}</p>
                                                  <p><strong>Life Span</strong> : ${dog.life_span}</p>
                                                              <p><strong>Temperament</strong> : ${dog.temperament}</p>
            </div>
        </div>
                `;
            cardsContainer.append(element);
        }
    });
};
$(document).ready(() => {
    fetchDogData().then((res) => buildCards(res));
});
$("#getMore").on("click", () => {
    fetchDogData().then((res) => buildCards(res));
});