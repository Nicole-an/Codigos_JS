<select name="marcas" id="marcas">
    <option value="10000">Ford</option>
    <option value="100000">VW</option>
    <option value="1000000">Ferrari</option>
</select>

const meuArray = document.querySelector('#marcas');
const nomeMarca = meuArray.options[select.selectedIndex].text;
const valorMarca = meuArray.options[select.selectedIndex].value;