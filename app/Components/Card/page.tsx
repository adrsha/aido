import React from 'react';
import './style.css'; 

const Nav = () => {
    let hello : [] = [
        ["adarsha/sharkCalc", "step by step pyhton based calc", 58],
        ["asur/pasm", "step by step rust based password manager", 46],
        ["adarsha/nvim", "neovim configurations", 78]
    ]
  return (
   <>
    <div>
        {hello[0][0]}
    </div>
   </>
  );
};

export default Nav;
