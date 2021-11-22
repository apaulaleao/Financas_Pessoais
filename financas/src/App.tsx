import {useState, useEffect} from 'react';
import * as C from './App.styles';
import {Item} from './Types/Item';
import {Category} from './Types/Category';
import {categories} from './data/categories';
import {items} from './data/items';
import {getCurrentMonth} from './helpers/dateFilter';

const App = ()=> {
  const [list,setList] = useState(items);
  const [ FilteredList,setFilteredlist] = useState <Item []> ([]);
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth());
  
  useEffect(()=>{

  }, [list,currentMonth]);
  
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sisteeeema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>

          {/* Area de Informação */}
          {/* Area de Inserção */}
          {/* tabela de itens */}

        </C.Body>
    </C.Container>

  );
}

export default App;