import React, {useEffect, useState} from 'react';
import "./style.css";


const getlocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {

  const [inputdata, setInputData] = useState('');
  const [items, setItems] = useState(getlocalData);
  const [isEditItem, setIsEditItem] = useState('');
  const [toggleButton, setToggleButton] = useState(false);

  const addItems = (inputdata) => {
    if (!inputdata){
      alert("Please fill the data!");
    }else if(inputdata && toggleButton){
        setItems(
          items.map((curElem) => {
              if (curElem.id === isEditItem){
                return {...curElem, name: inputdata}
              }
              else{
                return curElem;
              }
          })
        );
        setInputData([]);
        setIsEditItem('');
        setToggleButton(false);
    }
    else{
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name : inputdata,
      }
      setItems([...items,myNewInputData]);
      setInputData("")
    }
  }

  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
        return curElem.id === index;
    });

    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);

  };


  const deleteItems = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItem);
  };

  useEffect(() => {
      localStorage.setItem("mytodolist", JSON.stringify(items))
  }, [items]);

  return (
    <>
        <div className='main-div'>
            <div className="child-div">
              <figure>
                <img src="./images/todo.svg" alt = "todologo"/>
                <figcaption>Add Your List Here</figcaption>
              </figure>
              <div className='addItems'>
                <input
                    type='text'
                    placeholder='✍️ Add Item'
                    className='form-control'
                    value={inputdata}
                    onChange={(event) => setInputData(event.target.value)}

                />
                {toggleButton ? (
                    <i className='far fa-edit add-btn' onClick={()=>{addItems(inputdata)}}></i>
                ): (
                    <i className='fa fa-plus add-btn' onClick={()=>{addItems(inputdata)}}></i>
                )}
                
              </div>
              <div className='showItems'>
                {items.map((curElem, index) => {
                  return (<div className='eachItem' key={index}>
                  <h3>{curElem.name}</h3>
                  <div className='todo-btn'>
                    <i className='far fa-edit add-btn' onClick={() => editItem(curElem.id)}/>
                    <i className='far fa-trash-alt add-btn' onClick={() => deleteItems(curElem.id)}/>
                  </div>
                </div>
                );
                })}
              </div>



              <div className='showItems'>
              <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => setItems([])}> 
                  <span>CHECK LIST</span>
                </button>
              </div>
            </div>
        </div>
    </>
  );
};

export default Todo;