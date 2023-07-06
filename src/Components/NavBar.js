import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { faAccusoft, faAribnb } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ authenticate, setAthenticate }) => {
  const menuList = [
    '여성',
    '남성',
    '신생아 / 유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const navigate = useNavigate();
  // const goToLogin = () => {
  //   navigate('/login');
  // };

  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log('keyword', keyword)
      navigate(`/?q=${keyword}`);
    }
  }
  return (
    <div>
      <div className='nav-header'>
        {authenticate ? (
          <div onClick={() => setAthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{cursor: "pointer"}}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate('/login')}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{cursor: "pointer"}}>로그인</span>
          </div>
        )}
      </div>
      <div className='nav-logo'>
        <img 
          width={100}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png'
        />
      </div>
      <div className='nav-menu-area'>
        <ul className='menu'>
          {menuList.map((menu, index) => (
            <li>
              <a href='#' key={index}>
                {menu}
              </a>
            </li>
        ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' placeholder='제품검색' onKeyPress={search} />
        </div>
      </div>
    </div>
  )
}

export default NavBar
