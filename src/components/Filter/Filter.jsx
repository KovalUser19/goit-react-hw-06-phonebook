import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "../../redux/filterSlice";


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const handleFilterChange = (e) => {
    dispatch(onChangeFilter(e.target.value));
  };

  return (
    <div>
      <label>Find contacts by name
      <input
        type="text"
          value={filter}
          onChange={handleFilterChange}
        ></input>
        </label>
    </div>
  )
}