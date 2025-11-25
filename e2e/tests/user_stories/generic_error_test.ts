Feature("一般的なエラーテスト");

Scenario("存在しないページにアクセスすると、エラーメッセージと商品一覧へのリンクが表示される", ({ I }) => {
    I.amOnPage('/undefined');
    I.see('お探しのページは見つかりませんでした。');
    I.click('商品一覧へ戻る');
    I.seeInTitle('商品一覧');
});