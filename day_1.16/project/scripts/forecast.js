const key='1w75sAtlyUx8hiBabYuJDFEBj7yAAXXG'

const getWeather = async(id)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`

    const response=await fetch(base+query);
    const data=await response.json();

    return data[0]
}

const getCity = async (city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json() // response를 통해 응답받은 내용을 json화 함

    return data[0]
}

getWeather(226081);

//Key : "226081"