import { Strategies } from "@/component /strategy-select"
import { Box, Button } from "@mui/material"
import { ChessStrategy } from "@/type"
import { Dispatch, SetStateAction } from "react"
import { Chess } from "chess.js"

type ControlsProps = {
  blackStrategy: ChessStrategy
  setBlackStrategy: Dispatch<SetStateAction<ChessStrategy>>
  whiteStrategy: ChessStrategy
  setWhiteStrategy: Dispatch<SetStateAction<ChessStrategy>>
  chessboard: Chess
  setChessboard: Dispatch<SetStateAction<Chess>>
  isPlaying: boolean
  setIsPlaying: Dispatch<SetStateAction<boolean>>
}

export const Controls = ({
  blackStrategy,
  setBlackStrategy,
  whiteStrategy,
  setWhiteStrategy,
  chessboard,
  setChessboard,
  isPlaying,
  setIsPlaying
}: ControlsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: 1,
        marginY: 2
      }}
    >
      <Strategies
        blackStrategy={blackStrategy}
        setBlackStrategy={setBlackStrategy}
        whiteStrategy={whiteStrategy}
        setWhiteStrategy={setWhiteStrategy}
        chessBoard={chessboard}
        setChessboard={setChessboard}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: 20
          }}
          onClick={isPlaying ? () => setIsPlaying(false) : () => setIsPlaying(true)}
        >
          {isPlaying ? "STOP" : "START"}
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: 20
          }}
          onClick={() => {
            setIsPlaying(false)
            setTimeout(() => {
              setChessboard(new Chess())
            }, 300)
          }}
        >
          RESET
        </Button>
      </Box>
    </Box>
  )
}
