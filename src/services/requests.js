/**
 * Performs registration in the LS
 * @param username {string}
 * @param password {string}
 * @returns {Promise<{ data: Record<string, string> }>}
 */
export const register = ({user : { username, password }}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                const stringUsers = localStorage.getItem('users') || '';
                const users = JSON.parse(stringUsers) || [];

                if (users.find((user) => user.username === username)) {
                    throw(new Error('User already exists!'));
                }

                const newUser = {
                    username,
                    password,
                    id: Date.now(),
                    createdAt: (new Date()).toString()
                };

                localStorage.setItem('users', JSON.stringify([...users, newUser]));
                resolve({ data: newUser });
            } else {
                throw(new Error('Network error!'));
            }
        }, 1000);
    });
}

/**
 * Performs login according to the current LS users state
 * @param username {string}
 * @param password {string}
 * @returns {Promise<{ data: Record<string, string> }>}
 */
export const login = ({user : { username, password }}) => {
    console.log('Log request: ', username, password);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                const stringUsers = localStorage.getItem('users');
                const users = JSON.parse(stringUsers);

                if (!!!users.find((user) => user.username === username)) {
                    throw(new Error('No such user!'));
                }

                const lsCurrentUser = users.find((user) => user.username === username);
                if (lsCurrentUser.password.toString() !== password.toString()) {
                    throw(new Error('Incorrect password!'));
                }

                resolve({ data: lsCurrentUser });
            } else {
                throw(new Error('Network error!'));
            }
        }, 1000);
    });
};