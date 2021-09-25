const fetchAllBreeds = async () => {
    var settings = {
        url: "https://api.thedogapi.com/v1/breeds",
        method: "GET",
        timeout: 0,
        headers: {
            "x-api-key": "dbfa9b50-d09b-4f1e-8a85-69254300a88c"
        }
    };
    let newData = {};
    const breedsData = await $.ajax(settings).done(function (response) {
        const colorsArray = [
            "#12b406",
            "#66a20d",
            "#cbaa90",
            "#e681db",
            "#ed46d9",
            "#9cd059",
            "#e9d991",
            "#9de193",
            "#145819",
            "#63acd3",
            "#195443",
            "#299fb6",
            "#8b6668",
            "#32dd22",
            "#5152b4",
            "#075a6f",
            "#7f39a5",
            "#74814b",
            "#e7e36d",
            "#b5895f",
            "#813337",
            "#5a26ea",
            "#3d5b8c",
            "#2e0366",
            "#95358d",
            "#19aac9",
            "#0fc0d5",
            "#2335ee",
            "#f3dc68",
            "#a886cf",
            "#c45f56",
            "#be7228",
            "#08e427",
            "#ccf549",
            "#8b5aab",
            "#7712af",
            "#935223",
            "#64c596",
            "#ba39ad",
            "#2f40d7",
            "#ae4304",
            "#33caba",
            "#f189f5",
            "#47b536",
            "#357f84",
            "#957c9b",
            "#1403a3",
            "#446c08",
            "#ea099b",
            "#e4b086",
            "#2f34d4",
            "#ab08b3",
            "#c43692",
            "#d61506",
            "#51a1d4",
            "#e246a8",
            "#d1528d",
            "#8c599f",
            "#c40d8d",
            "#561999",
            "#214f7f",
            "#6c9b3e",
            "#e9754f",
            "#a56c32",
            "#28f9b4",
            "#5d902e",
            "#330210",
            "#f350f0",
            "#9bcc5d",
            "#c3d3a2",
            "#54d01a",
            "#0d87c9",
            "#5295a9",
            "#85e65d",
            "#f2ecfb",
            "#5428d8",
            "#de90c0",
            "#75edb5",
            "#7ef1cb",
            "#f3ee5c",
            "#f039f9",
            "#9b41e1",
            "#7e1d90",
            "#af4399",
            "#44023e",
            "#8fcef4",
            "#98fb47",
            "#09ccd3",
            "#5bf81c",
            "#4ec3f8",
            "#56eef9",
            "#4ae261",
            "#4323c2",
            "#ed2d4f",
            "#770d5f",
            "#909f5a",
            "#51ed5c",
            "#da9bf1",
            "#6e9ae5",
            "#08481c",
            "#114461",
            "#480f7c",
            "#e8d5a8",
            "#554c42",
            "#35c285",
            "#fe8b62",
            "#e40670",
            "#0b67cf",
            "#202358",
            "#86a9e9",
            "#eba5c3",
            "#670276",
            "#e07cd7",
            "#278df9",
            "#1ac92c",
            "#fbaf23",
            "#ab379f",
            "#666a16",
            "#8ddd2f",
            "#79031a",
            "#81b45d",
            "#9f4956",
            "#74509c",
            "#38e783",
            "#96ca91",
            "#cb280f",
            "#3709bf",
            "#f01500",
            "#622d2b",
            "#2c58d3",
            "#92eee8",
            "#843e35",
            "#d5fb92",
            "#a6db3b",
            "#7339b8",
            "#8b80c1",
            "#ae02c0",
            "#ccc765",
            "#865690",
            "#9c1471",
            "#648bcc",
            "#4fc3f1",
            "#6d206a",
            "#315b76",
            "#ccf2c6",
            "#af92f4",
            "#a6e77f",
            "#3d70c0",
            "#859484",
            "#573051",
            "#b3b3a5",
            "#a9216c",
            "#01cb13",
            "#beef5b",
            "#2f895a",
            "#5ac3cd",
            "#daf845",
            "#a68222",
            "#35f675",
            "#43245a",
            "#630d24",
            "#e9d357",
            "#e8d0ca",
            "#c3dfe4",
            "#1c1584",
            "#3be840",
            "#f82fae",
            "#6dd4dc",
            "#7e476b",
            "#bcaaf2",
            "#82f5de",
            "#1a22a5",
            "#1397d4",
            "#e2ad2f",
            "#176502",
            "#70e646",
            "#b4304f",
            "#a81c02",
            "#b59ae6",
            "#14746d",
            "#3b42cf",
            "#b35cdd",
            "#fd54ef",
            "#217c4f",
            "#875622",
            "#d63fb0",
            "#b6547f",
            "#fb4ca1",
            "#2e869f",
            "#e8766e",
            "#bbb8e7",
            "#8ec8e9",
            "#f749dd",
            "#6fb365",
            "#9e9601",
            "#23c002",
            "#72a56f",
            "#993f61",
            "#9259cf",
            "#dfdd1f"
        ];
        let breedsData = new Object();
        for (let i = 0; i < response.length; i++) {
            breedsData[response[i].name] = colorsArray[i];
        }
        // console.log(breedsData)
        newData = breedsData;
        return breedsData;
    });
    // console.log(newData)
    return newData;
};
const fetchDogData = async () => {
    let data = new Object();
    var settings = {
        url: "https://api.thedogapi.com/v1/images/search?limit=20",
        method: "GET",
        timeout: 0,
        headers: {
            //     TODO: PUT IN ENV VARIABLES
            "x-api-key": "dbfa9b50-d09b-4f1e-8a85-69254300a88c"
        }
    };
    $(".button-container > button").attr("disabled", "true");
    data = await $.ajax(settings).done(function (response) {
        // console.log(response);
        $(".button-container > button").removeAttr("disabled");
        return response;
    });
    return data;
};
const buildCards = async (data) => {
    const cardsContainer = $(".cards-container");
    // fetchAllBreeds()
    const breedsData = await fetchAllBreeds().then((res) => res);
    console.log(breedsData);

    //   Extracting fields from data
    data.forEach((item) => {
        if (item.breeds.length) {
            const dog = item.breeds[0];
            const element = `
        <div class="card overflow-auto gy-5 mx-auto p-3" style="width: 45%;">
            <div class="img-top" style="background: url(${item.url
                }) no-repeat center; background-size: cover;"></div>
            <div class="card-body">
              <h3 class="card-title mb-3" style="color : ${breedsData[dog.name]
                }">${dog.name}</h3>
              <p><strong>Weight</strong> : ${dog.weight.metric}</p>
              <p><strong>Height</strong> : ${dog.height.metric}</p>
                          <p><strong>Breed Group</strong> : ${dog.breed_group ? dog.breed_group : "-"
                }</p>
                                      <p><strong>Bred For</strong> : ${dog.bred_for ? dog.bred_for : "-"
                }</p>
                                                  <p><strong>Life Span</strong> : ${dog.life_span
                }</p>
                                                              <p><strong>Temperament</strong> : ${dog.temperament
                }</p>
            </div>
        </div>
                `;
            cardsContainer.append(element);
        }
    });
};
const loadData = () => {
    fetchDogData().then((res) => buildCards(res));
};
$(document).ready(() => {
    loadData();
});
$(".button-container > button").click(() => {
    loadData();
});

