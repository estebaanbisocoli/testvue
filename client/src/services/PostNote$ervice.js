import Api from './api'

export default {
    addNote(text) {
        return new Promise((resolve, reject) => {
            var result;
            try {
                result = Api().post('newNote', text);
            } catch (e) {
                reject(e);
            }
            resolve(result);
        })
    }
}