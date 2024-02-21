import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EMPLOYEE APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Additems</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="search">Search</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="Viewall">Viewall</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>





    </div>
  )
}

export default Nav