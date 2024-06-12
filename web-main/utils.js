export const generateItem = ({pathImgFirst, pathImgSecond, name, description, cost, discountProCent, addedDate}) => {
    const discountCost = discountPrice(discountProCent, cost)
    return `
	<div class="flex flex-col gap-[10px] relative bg-[#F4F4F6] lg:min-w-[425px]  transition-all duration-300 rounded-b-2xl pb-3 mt-4 lg:mt-24">
            <div class="group relative flex justify-center">
                <img class="lg:h-[590px] md:h-[458px] h-[217px] lg:hover:opacity-0 ease-in-out duration-300 transition-all" alt="${name}" src="public/img/${pathImgFirst}.png"/>
                <img class="lg:h-[590px] md:h-[458px] h-[217px] top-0 left-0  absolute opacity-0 hover:opacity-100 ease-in-out duration-300 transition-all"
                     alt="1" src="public/img/${pathImgSecond}.png"/>
                <div class="absolute bottom-3 z-10 flex gap-5">
                    <div class="lg:w-3 lg:h-3 md:w-[12px] md:h-[12px] w-[8px] h-[8px] rounded-full bg-white ease-in-out duration-300 border border-white z-10 transition-colors group-hover:bg-transparent"></div>
                    <div class="lg:w-3 lg:h-3 md:w-[12px] md:h-[12px] w-[8px] h-[8px] rounded-full border ease-in-out duration-300 border-white z-10 transition-colors group-hover:bg-white"></div>
                </div>
            </div>
            <div class="absolute flex top-2 right-4 gap-[10px] lg:gap-5">
                ${discountCost !== cost ? '<span class="lg:w-[61px] lg:h-[61px] md:w-[59px] md:text-[24px] md:h-[59px] w-[29px] h-[29px] bg-[#E0FB52] rounded-full text-xs inline-flex items-center justify-center  lg:text-3xl">%</span>' : ''}
                ${isNew(addedDate) ? '<span class="lg:w-[61px] lg:h-[61px] md:w-[59px] md:text-[24px] md:h-[59px] w-[29px] h-[29px] bg-white rounded-full inline-flex text-xs items-center justify-center lg:text-2xl">New</span>' : ''}
            </div>
            <div class="flex flex-col justify-between md:justify-start  lg:h-[249px] md:h-[238px] h-[190px] ">
                <span class="w-[156px] md:w-[290px] md:text-xl lg:w-[385px] md:mb-[30px] lg:mt-4 text-black text-sm lg:text-[21px] px-[10px] font-medium uppercase leading-[130%]">${name}</span>
                <div class=" text-nowrap justify-between max-h-[55px] mb-[16px] flex flex-col md:mb-[15px] items-start md:items-end lg:items-end px-[10px]">
                    <span class="text-black md:text-[17px]  text-opacity-50 text-xs lg:text-lg font-medium self-end leading-normal">${description}</span>
                    ${discountCost !== cost ? `<span class="text-black md:text-[24px] text-[15px] lg:text-3xl font-semibold lg:leading-[39px]">${discountCost} ₽ <span class="text-black md:text-[24px] text-opacity-30 text-base lg:text-3xl font-medium line-through ls:leading-[39px]">${cost} ₽</span> / м2</span>` : `<span class="text-black text-base md:text-[24px] lg:text-3xl font-medium lg:leading-[39px]">${cost} ₽ / м2</span>`}
                </div>
                <button class="lg:w-[385px] md:w-[290px] md:h-[57px] lg:h-[63px]  mx-auto lg:px-[30px] lg:pt-[15px] lg:pb-4 w-[136px] h-9 px-[30px] pt-[7px] pb-2 rounded-[50px] border border-black justify-center items-center inline-flex text-black text-xl hover:text-white hover:bg-black transition-all ease-in-out duration-500">
                    Купить
                </button>
            </div>
        </div>
    `
}

function isNew(addedDate) {
    const dayAdded = Number(addedDate.split('-')[0])
    const monthAdded = Number(addedDate.split('-')[1])
    const yearAdded = Number(addedDate.split('-')[2])
    const currentDate = new Date();

    let dayToday = currentDate.getDate();
    let monthToday = currentDate.getMonth() + 1;
    const yearToday = currentDate.getFullYear();
    if (yearToday - yearAdded < 0) return true;
    else if (monthToday - monthAdded <= 0) return true;
    else if (dayToday - dayAdded <= 0) return true;
    else return false;
}

function discountPrice(proCent, cost) {
    if (proCent === false) return cost
    const oneProCent = cost / 100
    return Math.round(cost - oneProCent * proCent)
}

const namesArray = [
    'Spc ламинат Moduleo LayRed Laurel Oak 51864',
    'Vinyl плитка Gerflor Senso Urban 5113',
    'Laminate панели Quick-Step Majestic 3442',
    'Engineered деревянный паркет 7851',
    'Linoleum плитка Forbo Marmoleum  9222',
    'ПВХ плитка Tarkett iD Essential 6698',
    'Ламинированные плитки Pergo 2481',
    'Solid деревянный пол Bruce  Oak 3739',
    'Spc ламинат Moduleo LayRed Wood 6412',
    'Vinyl планка Gerflor Virtuo Clic 7579',
    'Laminate плитка Quick-Step Country 9325',
    'Engineered деревянный паркет Supreme  1115',
    'Linoleum плитка Forbo Marmoleum Real 6034',
    'ПВХ планка Tarkett Starfloor Click 7083',
    'Ламинированные плитки Pergo Portfolio  8057',
    'Solid деревянный пол Bruce Hydropel Oak 4218',
    'Spc ламинат Moduleo Impress Wood 5794',
    'Vinyl планка Gerflor Senso Lock Plus 2267',
    'Laminate плитка Quick-Step Eligna Wide 8846',
    'Engineered паркет Kahrs Oak Fino 6552'
];

const descriptionArray = [
    '31 класс 5 мм',
    '32 класс 5.5 мм',
    '34 класс 6.5 мм',
    '30 класс 5 мм',
    '35 класс 7 мм',
    '31 класс 5 мм',
    '33 класс 6 мм',
    '32 класс 5.5 мм',
    '36 класс 7 мм',
    '30 класс 5 мм',
    '34 класс 6.5 мм',
    '35 класс 7 мм',
    '33 класс 6 мм',
    '31 класс 5 мм',
    '37 класс 7.5 мм',
    '36 класс 7 мм',
    '32 класс 5.5 мм',
    '38 класс 8 мм',
    '39 класс 8.5 мм',
    '33 класс 6 мм'
];

export function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomItem() {
    const item = {}
    item.pathImgFirst = getRandomNumber(1, 8)
    item.pathImgSecond = getRandomNumber(1, 8)
    item.name = namesArray[getRandomNumber(0, namesArray.length - 1)]
    item.description = descriptionArray[getRandomNumber(0, descriptionArray.length - 1)]
    item.cost = getRandomNumber(2000, 8000)
    if (getRandomNumber(0, 1) === 0) {
        item.discountProCent = false
    } else {
        item.discountProCent = getRandomNumber(3, 50)
    }
    item.addedDate = `${getRandomNumber(1, 30)}-${getRandomNumber(1, 12)}-2024`
    return item
}

export function generateShowItems(itemsToShow) {
    const itemsContainer = document.querySelector('#items-container');
    if (!window.localStorage.getItem("items")) {
        const generatedItems = [];
        for (let i = 0; i < getRandomNumber(6, 21); i++) {
            generatedItems.push(getRandomItem());
        }
        window.localStorage.setItem("items", JSON.stringify(generatedItems));
    }
    JSON.parse(window.localStorage.getItem("items")).forEach((item, i) => {
        const card = document.createElement('div');
        card.classList.add('slider-item');
        itemsContainer.appendChild(card);
        //card.outerHTML = generateItem(item);//check
        const currentItem = itemsContainer.children[i]
        currentItem.classList.add('slider-item')
        currentItem.id = i + 1
        if (i >= itemsToShow) {
            currentItem.classList.add('hidden')
            currentItem.classList.add('-ml-full')
        }
    })
}

export const nextPagination = () => {
    let nextListIndex;
    const paginationContainer = document.querySelector('#pagination-container');
    Array.from(paginationContainer.children).forEach((item, i) => {
        if (item.classList.contains('bg-black')) {
            item.classList.remove('bg-black')
            nextListIndex = i + 1
        } else if (nextListIndex === i) {
            item.classList.add('bg-black')
        }
    })
}
export const prevPagination = () => {
    let prevListIndex;
    const paginationContainer = document.querySelector('#pagination-container');
    const childrenPagination = Array.from(paginationContainer.children).reverse()
    Array.from(childrenPagination).forEach((item, i) => {
        if (item.classList.contains('bg-black')) {
            item.classList.remove('bg-black')
            prevListIndex = i + 1
        } else if (prevListIndex === i) {
            item.classList.add('bg-black')
        }
    })

}
export const generatePagination = () => {
    const paginationContainer = document.querySelector('#pagination-container');
    const itemsContainer = document.querySelector('#items-container')
    const itemsLength = 12;//itemsContainer.children.length
    const activePage = '<div class="lg:w-[15px] lg:h-[15px] md:w-[12px] md:h-[12px] w-[10px] h-[10px] bg-black rounded-full border border-black"></div>'
    const inactivePage = '<div class="lg:w-[15px] lg:h-[15px] md:w-[12px] md:h-[12px] w-[10px] h-[10px] rounded-full border border-black"></div>'
    const showInPage = isMobile() ? 2 : 3
    // console.log(Math.round(itemsLength / showInPage))
    for (let i = 0; i < Math.round(itemsLength / showInPage); i++) {
        if (i === 0) {
            const preparing = document.createElement('div')
            paginationContainer.appendChild(preparing)
            preparing.outerHTML = activePage
            preparing.id = `${i}-list`
        } else {
            const preparing = document.createElement('div')
            paginationContainer.appendChild(preparing)
            preparing.outerHTML = inactivePage
            preparing.id = `${i}-list`
        }
    }
}
export const isMobile = () => {
    return Number(window.innerWidth) < 900
    // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    //     .test(navigator.userAgent)
}


