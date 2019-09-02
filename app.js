var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var fs = require('fs');
var url = require('url');


app.use(express.static(path.join(__dirname, 'public')));
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MY HomePage</title>
        <!-- 합쳐지고 최소화된 최신 CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

        <!-- 부가적인 테마 -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

        <!-- 합쳐지고 최소화된 최신 자바스크립트 -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

        <script type="text/javascript" src="js/bootstrap.js"></script>
        <link rel="stylesheet" href="css/bootstrap.css">

        <link rel="stylesheet" href="css/index.css">

        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      </head>
      <body>
        <!-- 깃허브, 데스크탑 모바일 뷰, 로그인 회원가입 메뉴바-->
        <div class="preview-bar">
          <div class="container-fluid h-100">
            <div class="row align-items-center">
              <div class="col">
                <i class="fa fa-github"></i>
                  <a href="https://github.com">View on GitHub</a>
              </div>
              <div class="col">
                <ul class="nav element-flex justify-content-center" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link show active" id="desktopToggle" data-toggle="tab" href="#" role="tab" aria-selected="true">
                      <i class="fa fa-desktop"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link show" id="mobileToggle" data-toggle="tab" href="#" role="tab" aria-selected="false">
                      <i class="fa fa-mobile"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col text-right login">
                <a href="https://github.com/BlackrockDigital/startbootstrap-agency/archive/gh-pages.zip" class="btn btn-primary btn-sm mr-2 d-none d-md-inline-block" onclick="if (!window.__cfRLUnblockHandlers) return false; ga('send','event','Download','click','Agency')">Login</a>
                <a href="https://github.com/BlackrockDigital/startbootstrap-agency/archive/gh-pages.zip" class="btn btn-primary btn-sm mr-2 d-none d-md-inline-block" onclick="if (!window.__cfRLUnblockHandlers) return false; ga('send','event','Download','click','Agency')">Sign up</a>
              </div>
            </div>
          </div>
        </div>
        <!-- /깃허브, 데스크탑 모바일 뷰, 로그인 회원가입 메뉴바-->
        <!-- 메뉴바 -->
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <!-- 모바일의 경우 오른쪽에 3줄의 메뉴바 -->
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- /모바일의 경우 오른쪽에 3줄의 메뉴바 -->
            <div class="navbar-header">
              <a class="navbar-brand" href="#">MY HomePage</a>
            </div>
            <div>
              <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class="active"><a href="index.html">Home</a></li>
                <li><a href="#">포트폴리오</a></li>
                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">과목별 정리 <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">JAVA</a></li>
                    <li><a href="#">모바일응용설계</a></li>
                    <li><a href="#">웹프로그래밍</a></li>
                  </ul>
                </li>
                <li><a href="study.html">웹페이지 만들면서 공부한 자료</a></li>
              </ul>
            </div>
            </div>
          </div>
          <!-- 검색 기능 -->
          <form class="form-inline" id="cssSearch">
            <input class="form-control" type="text" placeholder="Search">
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
          <!-- /검색 기능 -->
        </nav>
        <!-- /메뉴바 -->
    <div class="container">
      <h3>베이직 네비게이션</h3>

    </div>

    <!-- 오른쪽의 고정바 -->
        <div id="aside">
          <button class="btn btn-primary btn-lg">Home</button>
        </div>
    <!-- /오른쪽의 고정바 -->
    <!-- menu바 아이콘 애니메이션 기능 추가 x자로 변하는거 -->
    <input type="checkbox" id="menuicon">
    <label for="menuicon">
      <span></span>
      <span></span>
      <span></span>
    </label>
      </body>
    </html>
    `;
    response.end(template);
 
});
app.listen(3000);