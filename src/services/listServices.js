import instance from './axiosInstace.js';

export class ListService {
  static getLists() {
    return instance.get('mediaLists')
      .then(res => res.data)
      .catch(err => console.error(err))
  }

  static registerList(name, desc) {
    instance.post('mediaLists', {
      name: name,
      userId: 1,
      description: desc
    })
      .then(res => console.log('Register OK'))
      .catch(err => console.error(err))
  }

  static updateList(listId, name, desc, userId) {
    console.log(listId, name, desc, userId);

    instance.put(`mediaLists/${listId}`, {
      name: name,
      userId: userId,
      description: desc
    })
      .then(res => console.log('Update OK'))
      .catch(err => console.error(err));
  }

  static deleteList(id) {
    instance.delete(`mediaLists/${id}`)
      .then(res => console.log('Delete OK'))
      .catch(err => console.error(err));
  }

  static getMediasFromList(listId) {
    instance.get(`mediaLists/${listId}/medias`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }

  static addMediaToList(listId, mediaId) {
    instance.post(`mediaLists/${listId}/medias/${mediaId}`)
      .then(res => console.log(`Media ${mediaId} added to List ${listId}`))
      .catch(err => console.error(err));
  }
}