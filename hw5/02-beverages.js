const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector('#results');
const loading = document.querySelector('#loading');

const addDrinkToDOM = (item) => {
    //console.log(item);
    let box = document.createElement('div');
    let strDrink = document.createElement('div');
    let strDrinkThumb = document.createElement('img');

    strDrink.textContent = item.strDrink;
    strDrinkThumb.src = item.strDrinkThumb;
    strDrinkThumb.alt = item.idDrink;

    app.style.display = 'flex';
    app.style.flexFlow = 'row wrap';
    app.style.justifyContent = 'space-around';
    app.style.padding = '30px';

    box.style.height = '300px';
    box.style.width = '200px';
    box.style.border = '10px solid var(--white)'
    //box.style.background = 'var(--white)';
    box.style.marginBottom = '15px';

    box.addEventListener("mouseover",function(){
      this.style.background = 'var(--purple)';
      this.style.border = '10px solid var(--purple)';
      this.style.color = 'var(--white)';

    })
    box.addEventListener("mouseout",function(){
      this.style.background = 'var(--gary)';
      this.style.border = '10px solid var(--white)';
      this.style.color = 'var(--gray1)';
    })

    strDrinkThumb.style.height = '75%';
    strDrinkThumb.style.width = '100%';
    //strDrinkThumb.style.paddingTop = '5px';

    strDrink.style.paddingTop = '20px';
    strDrink.style.fontSize = '16px';
    strDrink.style.fontWeight = 'bold';

    box.append(strDrinkThumb);
    box.append(strDrink);

    app.append(box);
  };

  const fetchData = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.drinks.forEach((item) => {
          addDrinkToDOM(item);
        });
      })
      .catch((error) => {
        console.log(error);
        let div = document.createElement('div');
        div.textContent = `An error occurred. Please try again.`;
        app.append(div);
      })
      .finally(() => {
        app.removeChild(loading);
      });
  };

fetchData(url);