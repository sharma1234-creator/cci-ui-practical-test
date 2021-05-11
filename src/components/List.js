import React from "react";

const List = () => {
  return (
    <>
      <table className="table table-hover table-bordered table-striped">
        <thead className="text-center">
          <tr>
            <th className="text-center">
              <input type="checkbox" name="" id="check_all_users" />
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
            <th>IsActive</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>
              <input type="checkbox" name="" id="" className="user_check" />
            </td>
            <td className="text-left">Brandon</td>
            <td className="text-left">Dsouza</td>
            <td className="text-left">Brandon.Dsouza@creativecapsule.com</td>
            <td className="text-left">9823163598</td>
            <td className="text-left">Margao</td>
            <td className="text-left">True</td>
            <td>
              <button
                className="btn btn-info btn-sm"
                data-toggle="modal"
                data-target="#edit_user_modal"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button className="btn btn-danger btn-sm">
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default List;
