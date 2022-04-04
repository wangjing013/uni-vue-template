/**
 * 网址（包含 http:// 或 https://
 */
export const REG_URL = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;

/**
 * 匹配手机号，可包含86
 */
export const REG_PHONE = /^((?!86-)\d+-\d{6,}|(86-)?1\d{10})$/;

/**
 * 匹配国外手机号，不含中国
 */
export const REG_PHONE_ABORAD = /(?:\(?[0\+]?\d{1,3}\)?)[\s-]?(?:0|\d{1,4})[\s-]?(?:(?:13\d{9})|(?:\d{7,8}))/;

/**
 * 校验字符是否合法
 * @param {string} char - 需要检验的字符串
 * @returns {boolean} - true 为通过，不包含非法字符。
 */
export const validateLeggal = (char = '') => {
  // 所有非法字符
  // eslint-disable-next-line no-useless-concat
  const str = '`~!@#$%^&*():;"' + "'|[]{}-_=+,<.>/?·~！@#￥%……&*（）？、；：‘“”’，。";
  return !str.split('').some((i) => char.indexOf(i) >= 0);
};

/**
 * 校验字符串是否属于 utf-8，数据库不能输入非 utf-8 的字符。部分 emoj 属于 utf-8（如星座♐️），而部分不是（如表情😸）。
 * UTF-8字符集的编码范围\u0000-\uFFFF
 * String.prototype.codePointAt(index) 方法返回字符串指定index位置的字符的Unicode码位,
 * 与旧的charCodeAt方法相比，它能够很好地支持增补字符(emoji)
 * '\u0000'.codePointAt() => 0
 * '\uffff'.codePointAt() => 65535
  @param {string} char - 需要检验的字符串
  @returns {boolean} - true 为通过，不包含非 utf-8 字符。
 */
export const validateUTF8 = (char = '') => {
  // 使用 ... 可以处理emoji，如 [...'哈哈哈，😄😂'] => ["哈", "哈", "哈", "，", "😄", "😂"]
  // 而使用 split 不行 '哈哈哈，😄😂'.split('') => ["哈", "哈", "哈", "，", "�", "�", "�", "�"]
  const arr = [...char];
  return !arr.some((s) => {
    const number = s.codePointAt(0);
    const ileggal = number < 0 || number > 65535;
    return ileggal;
  });
};

export const formatRichText = (html) => {
  // 控制小程序中图片大小
  let newContent = html.replace(/<img[^>]*>/gi, (match) => {
    let now = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
    now = now.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
    now = now.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
    return now;
  });

  newContent = newContent.replace(/style="[^"]+"/gi, (match) => {
    const now = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(
      /width:[^;]+;/gi,
      'max-width:100%;',
    );
    return now;
  });
  newContent = newContent.replace(/<br[^>]*\/>/gi, '');
  newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;"');
  newContent = newContent.replace(/\<h1/gi, '<h1 class="h1"');
  newContent = newContent.replace(/\<h2/gi, '<h2 class="h2"');
  newContent = newContent.replace(/\<h3/gi, '<h3 class="h3"');
  newContent = newContent.replace(/\<pre/gi, '<pre class="pre"');
  newContent = newContent.replace(/\<p>/gi, '<p class="p">');
  newContent = newContent.replace(/\<span/gi, '<span class="span"');
  newContent = newContent.replace(/\<div/gi, '<div class="div"');
  newContent = newContent.replace(/\<ol/gi, '<ol class="ol"');
  newContent = newContent.replace(/\<ul/gi, '<ul class="ul"');
  newContent = newContent.replace(/\<li/gi, '<li class="li"');
  newContent = newContent.replace(/\<strong/gi, '<strong class="strong"');
  newContent = newContent.replace(/\<em/gi, '<em class="em"');
  newContent = newContent.replace(/\<a/gi, '<a class="a"');
  newContent = newContent.replace(/\<blockquote/gi, '<blockquote class="blockquote"');
  newContent = newContent.replace(/\<del/gi, '<del class="del"');
  newContent = newContent.replace(/\<table/gi, '<table class="table"');
  newContent = newContent.replace(/\<thead/gi, '<thead class="thead"');
  newContent = newContent.replace(/\<tbody/gi, '<tbody class="tbody"');
  newContent = newContent.replace(/\<tr/gi, '<tr class="tr"');
  newContent = newContent.replace(/\<tr/gi, '<tr class="th"');
  newContent = newContent.replace(/\<td/gi, '<td class="td"');
  newContent = newContent.replace(/\<code/gi, '<code class="code"');
  return newContent;
};
