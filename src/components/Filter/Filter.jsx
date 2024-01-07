import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
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