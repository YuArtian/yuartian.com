# yuartian.com

## 我是谁

> 这是一个弟弟前端用娱乐时间以娱乐心态做的娱乐网站，总体来说，非常的娱乐。。。
>
> 这上面什么杂七杂八的都会有的
>
> 我想让你知道的是：如果你能常来找我玩 我是肥肠开心的 🎉

那么下面我来介绍一下我是如何启动的：

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:8888
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 我从哪里来

第一次的建站肯定充满了坑、坑、坑和坑。由于我的第一次给了某知名（臭名昭著？）VPS，所以让坑来的更多了一些。

但是，如今我已经是第二次走这个流程了，所以比之前流畅了一点。就在这里记录一哈我是如何开始的

#### Step 1

你需要拿出你的手机，查看微信钱包或者支付宝余额。。。然后在某个奸商的平台上面冲冲冲。（此处省略一万字）

#### Step 2

此时你已经有了你服务器的 `IP` 和登录密码。也就是说，它已经完全是你的了。我使用`Termius`和`FileZilla`来连接主机，这两个工具都非常好用👍

#### Step 3

如果你像我一样只装了Centos (7 x64) 的话，你现在就要开始着手去装各种小可爱了

先检查一下我们的系统版本

```
$ cat /etc/redhat-release
# CentOS Linux release 7.6.1810 (Core)
```

一般有两种方式安装 `yum` 或者源码包

`yum` 安装是在线安装，好处是：安装方式简单，不易出错

`源码包` 安装是先将源码下载下来，在自己的系统里编译生成可执行文件，然后执行。好处是：因为是在自己的系统上编	译的，更符合自己系统的性能，也就是说在自己的系统上执行服务性能效率更好。

我喜欢从源码安装，可以自由选择版本，尤其我总喜欢选最新版本。有些`yum`下来的包是老版本的，就很不舒服。

当然你也可以通过更改`.repo`文件的`url`来定制下载，但是很麻烦啊。。而且有时候你所有源的最高版本还是老版本的

-，- ( 闹心 )

通过`yum`安装的，会被装在系统的各个奇怪的位置。所以，`yum`装的，你只能通过`yum` 删。。。。

然而，源码包都在同一个目录下面，你想卸载就直接删掉文件夹。一般会放在 `/usr/local/包名` 下面。

`yum`安装的可以用 `systemctl`启动服务，而源码安装的你需要自己设置环境变量

- `git`

  你需要先装一些依赖工具，因为`git`的运行需要这些

  ```bash
  $ yum install curl-devel expat-devel gettext-devel \
    openssl-devel zlib-devel
  ```

  然后从下面的列表里选一个心仪的版本下载 https://mirrors.edge.kernel.org/pub/software/scm/git/

  然后编译并安装

  ```bash
  $ tar -zxf git-2.19.2.tar.gz
  $ cd git-2.19.2
  $ make prefix=/usr/local all
  $ sudo make prefix=/usr/local install
  ```

  配置环境变量，这样你就可以随处<del>大小</del>使用 `git`

  ```bash
  echo "export PATH=/usr/local/git/bin:$PATH" >> /etc/profile
  source /etc/profile
  ```

  检查一下是否成功了

  ```bash
  git --version
  ```

- `Node`&`npm`

  到`node`官网下包，选择 `**Linux Binaries (x64)**` 版本。这个是现成的二进制发布包，也就是说拿来就能用～

  `xz`解压一哈

  ```bash
  xz -d node-v10.16.0-linux-x64.tar.xz
  ```

  `tar`解包

  ```bash
  tar -xvf node-v10.16.0-linux-x64.tar
  ```

  以防万一以及根据默认习惯，把`node`挪到`/usr/local/lib/nodejs`

  ```bash
  mv node-v10.16.0-linux-x64 /usr/local/lib
  mv /usr/local/lib/node-v10.16.0-linux-x64/ /usr/local/lib/nodejs
  ```

  依然要添加环境变量

  ```bash
  echo "export PATH=/usr/local/lib/nodejs/bin:$PATH" >> /etc/profile
  source /etc/profile
  ```

  创建软链接

  ```bash
  ln -s /usr/local/lib/nodejs/bin/node /usr/bin/node
  ln -s /usr/local/lib/nodejs/bin/npm /usr/bin/npm
  ln -s /usr/local/lib/nodejs/bin/npx /usr/bin/npx
  ```

  验证安装

  ```bash
  node -v
  npm version
  npx -v
  ```

- `Yarn`

  ```bash
  curl -o- -L https://yarnpkg.com/install.sh | bash
  ```

  Done ~ 👍

- `Nginx`

  这里我展示一下用`yum`安装吧。因为`Nginx`不在默认的`yum`源中，你可以使用官网的`yum`源

  ```bash
  sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
  ```

  查看安装情况

  ```bash
  sudo yum repolist
  Loaded plugins: fastestmirror
  Loading mirror speeds from cached hostfile
  repo id                                                                 repo name                                                                                       status
  !base/7/x86_64                                                          CentOS-7                                                                                        10,019
  !epel/x86_64                                                            Extra Packages for Enterprise Linux 7 - x86_64                                                  13,241
  !extras/7/x86_64                                                        CentOS-7                                                                                           419
  !nginx-stable/7/x86_64                                                  nginx stable repo                                                                                  152
  !updates/7/x86_64                                                       CentOS-7                                                                                         2,137
  repolist: 25,968
  ```

  确认装好之后，直接`install`就可以了

  ```bash
  sudo yum install nginx
  ```

  装完就可以用`systemctl`启动服务啦

  ```bash
  systemctl start nginx
  ```

  另外，配置文件在 `/etc/nginx` 下面

如此，我们所需要的软件就都装好啦 🎉

## 🚢 Logbook 🌊 🌊 🌊 ～

### 重新起航。。。[ 2019/6/27 - 28 ]

> VPS不幸翻车了，很难受。。。不过，我也借着这个机会把网站推倒重来了。
>
> 这次用了阿里云，应该会稳定很多，就等备案下来啦（ps：阿里云的备案流程真的全是bug。。。真无语）
>
> 啊。。我的钱包啊，阿里云是真滴贵哦 😢
