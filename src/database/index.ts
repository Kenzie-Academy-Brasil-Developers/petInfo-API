import { createUser } from './../services/user.services';

const test = async () => {

    const data = {
        username:"kenzinho",
        email: "kenzinho@mail.com",
        password:"123456" ,
        avatar: "https://images.tcdn.com.br/img/img_prod/740836/cadeira_gamer_concordia_gm3_rgb_com_controle_e_powerbank_10803_1_20a776245ed6e9b1bd655072771901e6.png"
    }

    await createUser(data)
}

test()