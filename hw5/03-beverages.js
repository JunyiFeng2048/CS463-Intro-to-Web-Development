$(document).ready(function () {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
  
    // Add your code here
    //let app = document.querySelector('#results');
    //const loading = document.querySelector('#loading');
    
    const addDrinkToDOM = (item) => {

        $('#results')
            .css({
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-around',
            padding: '30px',
            })
            .append($('<div>')  
                .css({
                height: '300px',
                width: '200px',
                border: '10px solid var(--white)',
                marginBottom: '15px',
                })
                .mouseover(function(){
                    this.style.background = 'var(--purple)';
                    this.style.border = '10px solid var(--purple)';
                    this.style.color = 'var(--white)';
                })
                .mouseout(function(){
                    this.style.background = 'var(--gary)';
                    this.style.border = '10px solid var(--white)';
                    this.style.color = 'var(--gray1)';
                })
                .append($('<img>')
                    .attr('src',item.strDrinkThumb)
                    .attr('alt',item.idDrink)
                    .css({
                    height: '75%',
                    width: '100%',
                    //paddingTop: '5px',
                }))
                .append($('<div>')
                    .text(item.strDrink)
                    .css({
                    paddingTop: '20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                }))
                
            );
        };
    
    const fetchData = async(url) => {
        
        let result = await $.ajax({
            type: 'GET',
            url: url,
            success: (data) => {
                console.log(data);
                data.drinks.forEach((item) => {
                    addDrinkToDOM(item);
                });
            },
            complete: () => {
                $('#loading').remove();
            },
            error: (error) => {
                console.log(error);
                $('#results')
                    .append('<div>')
                    .text(`An error occurred. Please try again.`);
            },
            
        })
        console.log(result);
        
    };
    
    fetchData(url);
});