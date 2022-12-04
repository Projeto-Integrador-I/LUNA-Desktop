import instance from './axiosInstace.js';

export class MediaService {
  static getMedias() {
    return instance.get('medias')
      .then(res => res.data)
      .catch(err => console.error(err))
  }

  static addMedia(media) {
    return instance.post('medias', media)
      .then(res => res.data)
      .catch(err => console.error(err))
  }
}