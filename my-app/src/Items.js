import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { valueContext } from './Contexts'


export default function Items(props) {
    const {data}= props
    const {name,setName} = useContext(valueContext)
    const handleChange =(e)=>{
        if (e.target.checked){
            setName([...name,{name:data.name,id:data.id}])
        }else{
            setName(name.filter(u=> u.id!==data.id))
        }
    }
  return (
    <div className="allitems">
        <input type="checkbox" onChange={handleChange}/>
        <label>
            {data.name}
        </label>
    </div>
  )
}

Items.propTypes = {
  data: PropTypes.object.isRequired
}