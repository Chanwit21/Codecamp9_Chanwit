import React from 'react';

function UserCard({ user }) {
  //   console.log(user);
  return (
    <>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        <div className="row align-items-center rounded shadow-sm mb-2 bs-callout bs-callout-info">
          <div className="col-2 d-flex justify-content-center">
            <img
              src={user.avatar_url}
              alt="img_profile"
              className="rounded-circle w-75 my-3"
            />
          </div>
          <div className="col-10">
            <h1 className="fs-3 fw-bold text-color-cornflowerblue">
              Username : {user.login}
            </h1>
            <p className="fs-5 fw-bolder text-color-darkorchid">
              Url : {user.html_url}
            </p>
            <p className="fs-5 fw-bolder text-color-darkorchid">
              Score : {user.score}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}

export default UserCard;
