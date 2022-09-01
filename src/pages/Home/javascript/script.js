const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

searchButton.addEventListener('click', () =>
{
    openSearchBar();
});

window.addEventListener('click', div =>
{
    let divId = div.target.id;

    if( divId != 'searchButton' && divId != 'searchInput' && divId != 'searchIcon' )
    {
        closeSearchBar();
    }
});

function openSearchBar()
{
    searchButton.style.display = 'none';
    searchBar.style.display = 'flex';
}

function closeSearchBar()
{
    searchBar.style.display = 'none';
    searchButton.style.display = 'flex';
}