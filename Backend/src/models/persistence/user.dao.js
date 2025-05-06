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

const update = (userId,newDetails) => {
    let existingUser=false;
    let userIndex;
    users.map((user,index)=>{
        if(user.id === userId){
            existingUser=user;
            userIndex=index;
        }
    });

    if(!existingUser)
        return false;

    const updatedUser    ={
        ...existingUser,
        ...newDetails
    };

    users.splice(userIndex,1,updatedUser);
    return updatedUser;
    
};

const insert=(details)=>{
    const newUser = {id:users.length+1,...details};
    users.push(newUser);
    return true;
}

    const remove=(userId)=>{
        const deleteUser =(user,index)=>{
            if(user?.id === userId){
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