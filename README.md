ミラクルユーズフルスーパータイマーです。1刻みのカウントダウンにしか対応していません。
# じゅーせいじ
カスタムフックuseTimerとタイマー用のビジュアルコンポーネントTimerCardを提供します。TimerCardはカスタムを受け付けていないのでお気に召さなければ自作してください。
```JavaScript
const timer = useTimer(limit)

return <TimerCard timer={timer} />
```
limitを変更するとtimerが新しいlimitで作り直されます。簡単ですね。