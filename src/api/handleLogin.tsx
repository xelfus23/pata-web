import axios from "axios";

export const HandleLogin = async (username: string, password: string) => {
    try {
        const data = {
            username,
            password,
        };
        axios
            .get("http://localhost:5454/user", data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });

        return { success: true };
    } catch (e) {
        console.error("Error sending message: ", e);
        alert("Error sending message. Please try again.");
    }
};
