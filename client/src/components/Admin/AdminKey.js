import React from 'react';
import {Link} from 'react-router-dom'

const AdminKey =>
          <Link to='/admin' className="admin-key">
            <img src='../Images/admin-key.png' alt='admin page'/>
            <div className='admin-caption'> admin key </div>
          </Link>

export default AdminKey;
