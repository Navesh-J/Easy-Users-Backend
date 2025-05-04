import users from '../data/users.data.js'


const get=(userId)=>{
    const findUser=users.find((user)=>{
        if(user.id === userId){
            return user;
        }
        return null;
    })
    return findUser;
}

const getAll=()=>{
    return users;
}

const update = (newDetails) => {
    users = users.map(user => 
      user.id === newDetails.id ? { ...user, ...newDetails } : user
    );
};

const insert=(details)=>{
    const newUser = {...details,id:users.length+1};
    users.push(newUser);
    return true;
}

const remove=(userId)=>{
    const deleteUser =(user,index)=>{
        if(user.id === userId){
            users.splice(index,1)
            return true;
        }
        return false;
    }
    return users.find(deleteUser);
}

export default{
    get,getAll,update,insert,remove
}