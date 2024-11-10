import React from 'react';
import styled from 'styled-components';

const LinksLP = () => {
  return (
    <StyledWrapper>
      <div className="card mt-24">
        <p><a href="/weare"><span>How We Are</span></a></p>
        <p><a href="/wedo"><span>What We Do</span></a></p>
        <p><a href="/reward"><span>Rewards (Coming soon!)</span></a></p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 254px;
    height: 254px;
    border-radius: 4px;
    background: #212121;
    display: flex;
    gap: 5px;
    padding: .4em;
  }

  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: all .5s;
    background: #212121;
    border: 1px solid #ff5a91;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card p:hover {
    flex: 4;
  }

  .card p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    transform: rotate(-90deg);
    transition: all .5s;
    text-transform: uppercase;
    color: #ff568e;
    letter-spacing: .1em;
  }

  .card p:hover span {
    transform: rotate(0);
  }`;

export default LinksLP;
