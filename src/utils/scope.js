/**
 * scope 访问小程序权限列表
 */
const checkPermissions = ({
  scope,
  modalTitle,
  modalContent,
  successTitle = '授权成功',
  failTitle = '授权失败',
}) => new Promise((resolve, reject) => {
  uni.getSetting({
    success(res) {
      if (res.authSetting[scope]) {
        resolve();
      } else {
        uni.authorize({
          scope,
          success() {
            resolve();
          },
          fail() {
            uni.showModal({
              title: modalTitle,
              content: modalContent,
              success(result) {
                if (result.confirm) {
                  uni.openSetting({
                    success(data) {
                      if (data.authSetting[scope]) {
                        uni.showToast({
                          title: successTitle,
                        });
                        resolve();
                      } else {
                        uni.showToast({
                          title: failTitle,
                        });
                        reject();
                      }
                    },
                  });
                }
              },
            });
          },
        });
      }
    },
  });
});

export function checkCameraPermissions() {
  return checkPermissions({
    scope: 'scope.camera',
    modalTitle: '是否授权访问相册',
    modalContent: '需要获取您的访问图片权限，请确认授权，否则将无法访问到相册图片',
  });
}

export function checkPhotosAlbumPermissions() {
  return checkPermissions({
    scope: 'scope.writePhotosAlbum',
    modalTitle: '是否授权保存到相册',
    modalContent: '需要获取您的保存图片权限，请确认授权，否则图片将无法保存到相册',
  });
}
