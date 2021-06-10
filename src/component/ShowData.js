import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../redux/Action";
export default function ShowData() {
  const getData = useSelector((state) => state.reducer.getData);
  const [data, setdata] = useState(getData);

  const dispatch = useDispatch();
  const [searchData1, setsearchData] = useState("");
  useEffect(() => {
    dispatch(getApiData());
  }, [data]);

  const searchData = (e) => {
    setsearchData(e);
  };
  console.log(`data`, data);
  return (
    <div>
      <form>
        <div class="form-group mt-5  hover">
          <input
            type="email"
            class="form-control w-25 float-right mr-5"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="search by name"
            onChange={(e) => searchData(e.target.value)}
          />
        </div>
      </form>
      <table class="table table-striped p-5 m-5 table-hover  table-bordered ml-5 mr-5 mb-5 mt-5  table-responsive-md">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Active Or Not</th>
          </tr>
        </thead>
        <tbody>
          {getData
            .filter((filterItem) => {
              if (searchData1.length > 0) {
                return filterItem.strProgramTypeName
                  .toLowerCase()
                  .includes(searchData1.toLowerCase());
              } else {
                return filterItem;
              }
            })
            .map((item) => (
              <tr>
                <td>{item.intProgramTypeId}</td>
                <td>{item.strProgramTypeName}</td>
                <td>{item.ysnActive}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
