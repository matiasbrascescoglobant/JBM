import { createUser, getUsers, updateUser, deleteUser } from '../services/user-service';

const read_users = async (req, res) => {
    try {
      const users = await getUsers();
      return res.json({
        success: true,
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
}

const add_users = async (req, res) => {
    try{
        const {email, password, name, username, role } = req.body;

        const newUser = await createUser({
            email,
            password,
            name,
            username,
            role
        });

        res.status(201).send(newUser);
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const update_users = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await updateUser(id, req.body);
        return res.json({
            success: true,
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const delete_users = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await deleteUser(id);
        return res.json({
            success: true,
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

export {
    read_users,
    add_users,
    delete_users,
    update_users
};