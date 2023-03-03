import React from 'react';
import ListAllContacts from '../../common/components/ListAllContacts';
import Logo from '../../common/components/Logo';
import Search from '../../components/Search';

const ContactsList = () => {
  return (
    <>
      <Logo />
      <Search />
      <ListAllContacts />
    </>
  );
};

export default ContactsList;
