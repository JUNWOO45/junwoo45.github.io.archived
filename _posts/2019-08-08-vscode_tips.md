---
layout: post
title: Visual Studio Code Tips
tags: [ETC]
comments: true
---



VS Code를 애용하고 있으므로 개발환경설정 및 기분전환에 사용하기위해 기록으로 남깁니다.

<br>

## 터미널 관련

---

### 터미널에서 `code ` 라고 입력하여 VS Code 실행되도록 설정

Command Pallete(Shift + Command + P) 에서 `Shell command: Install 'code' command in PATH` 선택하여 설치

```
$ code .
```

<br>

## 커스터마이징

---

### 테마 변경

```
Command + K  Command + T
```

현재 쓰고 있는 Theme

- Material Icon Theme

<br>

## 단축키

---

### 터미널 열기

```
Shift + Control + `
```

- 개인적으로 손가락이 너무 힘들다.. 근데 굉장히 자주 쓰게된다...  

<br>

### 사이드바 토글

```
command + b
```

<br>

### Zen mode(전체화면)

```
Command + k z
```

- ESC를 두 번 누르면 나가집니다.  

<br>

### 현재 탭 복사하여 하나 또 열기

```
Command + \
```

<br>

### 탭 스위칭

```
Command + 1, Command + 2 ...
```

<br>

### Extensions 열기

```
Shift + Command + X
```

<br>

## Editing

---

### Multi cursor selection (여러 위치 선택)

```
Option + Click
```

<br>

### 커서가 위치한 단어와 동일한 모든 단어 선택

```
Shift + Command + l
```

<br>

### 현재 위치에 선택한 단어와 동일한 단어 하나씩 추가

```
Command + d
```

<br>

### Column selection

```
Shift + Option + 마우스 드래그
```

<br>

<br>



## 좋아하는 VS Code extension

---

```
1. auto close tag
2. auto rename tag
3. live server
4. Path Intellisense : autocompletes filename
5. Bracket Pair colorizer V2 
6. Easy less : less to css compiler
7. gitLens: 엄청 편리하고 신박함.
```

### auto close tag

VS Code 1.16부터는 빌트인기능으로 들어갔지만, Vue나 TypeScript등을 사용할 때에는 여전히 유용합니다.  

<br>

### auto rename tag