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

  static updateList(name, desc) {
    instance.put('mediaLists/' + 1, {
      name: name,
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
}